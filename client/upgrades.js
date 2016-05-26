  $("#up0").click(function() {
    bootbox.dialog({
      message : "Enhance your sales by using Grandma's recipe! Press ESC to cancel.",
      title : "Grandma's Recipe",
      onEscape : function() {
      },
      buttons : {
        success : {
          label : "Buy Upgrade",
          className : "btn-success",
          callback : function() {
            if (Grandma.clicked == false) {
              if (lemon_money >= Grandma.price) {
                lemon_money -= Grandma.price;
                $("#lemonmoney").html("$" + lemon_money.toString());
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
      message : "Increase profits by doubling up and selling Orange Juice along with Lemonade. Press ESC to cancel.",
      title : Orange.name,
      onEscape : function() {
      },
      buttons : {
        success : {
          label : "Buy Upgrade",
          className : "btn-success",
          callback : function() {
            if (Orange.clicked == false) {
              if (lemon_money >= Orange.price) {
                lemon_money -= Orange.price;
                $("#lemonmoney").html("$" + lemon_money.toString());
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
