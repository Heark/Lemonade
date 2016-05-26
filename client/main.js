
var lemon_money = 0;
var lemon_growth = 1;
var upgrade = function(tmplName, desc, price, effect) {
  this.name = tmplName;
  this.desc = desc;
  this.price = price;
  this.effect = effect;
  this.clicked = false;
};
function float(num) {
  this.num = num;
  num = num.toString();
  return parseFloat(num);
}
var Grandma = new upgrade("Grandma's Recipe", "", 100, 5);
var Orange = new upgrade("Orange Juice", "", 350, 8);
var Assistant = new Upgrade("Assistant", "", 750, float(10.5));
var upgrades = [Grandma, Orange, Assistant];
$(document).ready(function() {
  var i = 0;
  for (;i < upgrades.length;i++) {
    $("#upgrades").append('<a href="#" id="up' + i + '" class="btn btn-sml btn-success" title=' + upgrades[i].desc + ">" + upgrades[i].name + "</a>");
  }

  $("#lemon").click(function() {
    lemon_money += lemon_growth;
    $("#lemonmoney").html("$" + lemon_money.toString());
  });
});
