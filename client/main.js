
var lemon_money = 0;
var lemon_growth = 1;
var Lemonade = {
upgrade: function(tmplName, desc, price, effect) {
  this.name = tmplName;
  this.desc = desc;
  this.price = price;
  this.effect = effect;
  this.clicked = false;
},
float: function(num) {
  this.num = num;
  num = num.toString();
  return parseFloat(num);
}
}
  if (!Object.prototype.watch) {
	Object.defineProperty(Object.prototype, "watch", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (prop, handler) {
			var
			  oldval = this[prop]
			, newval = oldval
			, getter = function () {
				return newval;
			}
			, setter = function (val) {
				oldval = newval;
				return newval = handler.call(this, prop, oldval, val);
			}
			;
			
			if (delete this[prop]) { // can't watch constants
				Object.defineProperty(this, prop, {
					  get: getter
					, set: setter
					, enumerable: true
					, configurable: true
				});
			}
		}
	});
}

// object.unwatch
if (!Object.prototype.unwatch) {
	Object.defineProperty(Object.prototype, "unwatch", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (prop) {
			var val = this[prop];
			delete this[prop]; // remove accessors
			this[prop] = val;
		}
	});
}
var $watchLemon = {
  p: lemon_money
};
setInterval(function(){
  $watchLemon.p = lemon_money;
}, 500)
$watchLemon.watch("p", function (id, oldval, newval) {
    newval > oldval ? $("#lemonmoney").html("$" + lemon_money.toString()) : $("#lemonmoney").html("$" + lemon_money.toString());
    return newval;
});
$(document).ready(function(){
    $("#lemon").click(function() {
    lemon_money += lemon_growth;
  });
})

