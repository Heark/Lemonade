/**
 * @return {?}
 */
Object.prototype.commaFilter = function() {
  return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
/** @type {number} */
var lemon_money = 0;
/** @type {number} */
var lemon_growth = 1;
/**
 * @param {string} tmplName
 * @param {string} desc
 * @param {?} price
 * @param {string} effect
 * @return {undefined}
 */
var upgrade = function(tmplName, desc, price, effect) {
  /** @type {string} */
  this.name = tmplName;
  /** @type {string} */
  this.desc = desc;
  this.price = price;
  /** @type {string} */
  this.effect = effect;
  /** @type {boolean} */
  this.clicked = false;
};
var Grandma = new upgrade("Grandma's Recipe", "", 100, 10);
var Orange = new upgrade("Orange Juice", "", 350, 25);
/** @type {Array} */
var upgrades = [Grandma, Orange];
$(document).ready(function() {
  /** @type {number} */
  var i = 0;
  for (;i < upgrades.length;i++) {
    $("#upgrades").append('<a href="#" id="up' + i + '" class="btn btn-sml btn-success" title=' + upgrades[i].desc + ">" + upgrades[i].name + "</a>");
  }
  $("#up0").click(function() {
    bootbox.dialog({
      message : "Enhance your sales by using Grandma's recipe! Press ESC to cancel.",
      title : "Grandma's Recipe",
      /**
       * @return {undefined}
       */
      onEscape : function() {
      },
      buttons : {
        success : {
          label : "Buy Upgrade",
          className : "btn-success",
          /**
           * @return {undefined}
           */
          callback : function() {
            if (Grandma.clicked == false) {
              if (lemon_money >= Grandma.price) {
                lemon_money -= Grandma.price;
                $("#lemonmoney").html("$" + lemon_money.commaFilter());
                lemon_growth += Grandma.effect;
                /** @type {boolean} */
                Grandma.clicked = true;
              } else {
                toastr.error("Not enough money!");
              }
            } else {
              toastr.error("You already have this upgrade!");
            }
          }
        }
      }
    });
  });
  $("#up1").click(function() {
    bootbox.dialog({
      message : "Increase profits by doubling up and selling Orange Juice along with Lemonade. Press ESC to cancel.",
      title : Orange.name,
      /**
       * @return {undefined}
       */
      onEscape : function() {
      },
      buttons : {
        success : {
          label : "Buy Upgrade",
          className : "btn-success",
          /**
           * @return {undefined}
           */
          callback : function() {
            if (Orange.clicked == false) {
              if (lemon_money >= Orange.price) {
                lemon_money -= Orange.price;
                $("#lemonmoney").html("$" + lemon_money.commaFilter());
                lemon_growth += Orange.effect;
                /** @type {boolean} */
                Orange.clicked = true;
              } else {
                toastr.error("Not enough money!");
              }
            } else {
              toastr.error("You already have this upgrade!");
            }
          }
        }
      }
    });
  });
  $("#lemon").click(function() {
    lemon_money += lemon_growth;
    $("#lemonmoney").html("$" + lemon_money.commaFilter());
  });
});
