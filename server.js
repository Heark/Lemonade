// Change 
$PORT = process.env.PORT;
$IP = process.env.IP; // Not necessarily needed
// End of changes

var http = require("http");
var path = require("path");
var async = require("async");
var socketio = require("socket.io");
var express = require("express");
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);
router.use(express.static(path.resolve(__dirname, "client")));
/** @type {Array} */
var messages = [];
/** @type {Array} */
var sockets = [];
io.on("connection", function(socket) {
    messages.forEach(function(data) {
        socket.emit("message", data);
    });
    sockets.push(socket);
    socket.on("disconnect", function() {
        sockets.splice(sockets.indexOf(socket), 1);
        updateRoster();
    });
    socket.on("message", function(prefix) {
        /** @type {string} */
        var part = String(prefix || "");
        if (!part) {
            return;
        }
        socket.get("name", function(dataAndEvents, errorName) {
            var data = {
                name: errorName,
                text: part
            };
            broadcast("message", data);
            messages.push(data);
        });
    });
    socket.on("identify", function(prefix) {
        socket.set("name", String(prefix || "Anonymous"), function(dataAndEvents) {
            updateRoster();
        });
    });
});
/**
 * @return {undefined}
 */
function updateRoster() {
    async.map(sockets, function(handle, data) {
        handle.get("name", data);
    }, function(dataAndEvents, inplace) {
        broadcast("roster", inplace);
    });
}
/**
 * @param {string} message
 * @param {?} data
 * @return {undefined}
 */
function broadcast(message, data) {
    sockets.forEach(function(socket) {
        socket.emit(message, data);
    });
}
server.listen($PORT || 3E3, $IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log("Lemonade server listening at", addr.address + ":" + addr.port);
});
