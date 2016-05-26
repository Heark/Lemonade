 var Grandma = new Lemonade.upgrade("Grandma's Recipe", "", 100, 1);
 var Orange = new Lemonade.upgrade("Orange Juice", "", 350, 2);
 var Assistant = new Lemonade.upgrade("Assistant", "", 750, Lemonade.float(3.5));
 var upgrades = [Grandma, Orange, Assistant];
 $(document).ready(function() {
     var i = 0;
     for (; i < upgrades.length; i++) {
         $("#upgrades").append('<a href="#" id="up' + i + '" class="btn btn-sml btn-success" title=' + upgrades[i].desc + ">" + upgrades[i].name + " - $" + upgrades[i].price + "</a>");
     }

     $("#up0").click(function() {
         bootbox.dialog({
             message: "Enhance your sales by using Grandma's recipe! Press ESC to cancel.",
             title: "Grandma's Recipe - $" + Grandma.price,
             onEscape: function() {},
             buttons: {
                 success: {
                     label: "Buy Upgrade",
                     className: "btn-success",
                     callback: function() {
                         if (Grandma.clicked == false) {
                             if (lemon_money >= Grandma.price) {
                                 lemon_money -= Grandma.price;
                                 lemon_growth += Grandma.effect;
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
             message: "Increase profits by doubling up and selling Orange Juice along with Lemonade. Press ESC to cancel.",
             title: "Orange Juice - $" + Orange.price,
             onEscape: function() {},
             buttons: {
                 success: {
                     label: "Buy Upgrade",
                     className: "btn-success",
                     callback: function() {
                         if (Orange.clicked == false) {
                             if (lemon_money >= Orange.price) {
                                 lemon_money -= Orange.price;
                                 lemon_growth += Orange.effect;
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
     $("#up2").click(function() {
         bootbox.dialog({
             message: "Increase profits by hiring an assistant to do work for you. Increase profits by $1 every 5 seconds",
             title: "Assistant - $" + Assistant.price,
             onEscape: function() {},
             buttons: {
                 success: {
                     label: "Buy Upgrade",
                     className: "btn-success",
                     callback: function() {
                         if (Assistant.clicked == false) {
                             if (lemon_money >= Assistant.price) {
                                 lemon_money -= Assistant.price;
                                 lemon_growth += Assistant.effect;
                                 setInterval(function() {
                                     lemon_money++
                                 }, 5000)
                                 Assistant.clicked = true;
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
 });
