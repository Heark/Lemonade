/*global GLOBAL */
var lemon_money = 0;
var lemon_growth = 1;
var upgrade = function(name, desc, price, effect) {
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.effect = effect;
    this.clicked = false;
}
var Grandma = new upgrade("Grandma\'s Recipe", "", 100, 10);
var Orange = new upgrade("Orange Juice", "", 350, 25);
var upgrades = [Grandma, Orange];
$(document).ready(function() {
    for (var i = 0; i < upgrades.length; i++) {
        $("#upgrades").append("<a href=\"#\" id=\"up" + i + "\" class=\"btn btn-sml btn-success\" title=" + upgrades[i].desc + ">" + upgrades[i].name + "</a>")
    };
    // Grandma's Recipe
    $("#up0").click(function() {
        bootbox.dialog({
            message: "Enhance your sales by using Grandma\'s recipe! Press ESC to cancel.",
            title: "Grandma\'s Recipe",
            onEscape: function() {},
            buttons: {
                success: {
                    label: "Buy Upgrade",
                    className: "btn-success",
                    callback: function() {
                        if (Grandma.clicked == false) {
                            if (lemon_money >= Grandma.price) {
                                lemon_money -= Grandma.price;
                                $("#lemonmoney").html("$" + lemon_money.toString())
                                lemon_growth += Grandma.effect;
                                Grandma.clicked = true;
                            } else {
                                toastr.error("Not enough money!")
                            }
                        } else {
                            toastr.error("You already have this upgrade!")
                        }
                    }
                }
            }
        });

    })
    $("#up1").click(function() {
        bootbox.dialog({
            message: "Increase profits by doubling up and selling Orange Juice along with Lemonade. Press ESC to cancel.",
            title: Orange.name,
            onEscape: function() {},
            buttons: {
                success: {
                    label: "Buy Upgrade",
                    className: "btn-success",
                    callback: function() {
                        if (Orange.clicked == false) {
                            if (lemon_money >= Orange.price) {
                                lemon_money -= Orange.price;
                                $("#lemonmoney").html("$" + lemon_money.toString())
                                lemon_growth += Orange.effect;
                                Orange.clicked = true;
                            } else {
                                toastr.error("Not enough money!")
                            }
                        } else {
                            toastr.error("You already have this upgrade!")
                        }
                    }
                }
            }
        });

    })
    $("#lemon").click(function() {
        lemon_money += lemon_growth;
        $("#lemonmoney").html("$" + lemon_money.toString())
    })
});
