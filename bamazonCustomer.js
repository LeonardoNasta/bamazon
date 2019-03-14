var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table"); // for cool tables! //
//var colors = require("colors");  //  for future use  //

const table = new Table({
  head: ["ID", "Product", "Genre", "Price", "In Stock"],
  colWidths: [5, 50, 25, 10, 10]
});

var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "SuperSecret",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  displayProducts();
});

function displayProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) console.error();
    for (var i = 0; i < res.length; i++) {
      table.push([
        res[i].id,
        res[i].product_name,
        res[i].department_name,
        res[i].price,
        res[i].stock_quantity
      ]);
    }
    console.log(table.toString());
    askQuestions();
  });
}

function askQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "Please enter the ID for the item you would like to purchase.",
      },
      /*inquirer.prompt({
    name: "choice",
    type: "list",
    message: "What would you like to purchase?",
    choices: [
      "Astroworld by Travis Scott",
      "Bailando by Enrique Iglesias",
      "Despacito by Luis Fonzi feat. Daddy Yankee",
      "Weezer by Weezer",
      "Shrek the Third Soundtrack",
      "Houses of the Holy by Led Zeppelin",
      "Kids See Ghosts by Kids See Ghosts",
      "Pet Sounds by the Beach Boys",
      "Thriller by Michael Jackson",
      "Mirrors by Justin Timberlake"
    ]
  }); 
    */

      {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy?",
      }
    ])
    .then(function(input) {
      var product = input.id;
      var quantity = input.quantity;

      // get the information of the chosen item
      connection.query(
        "SELECT * FROM products WHERE ?",
        { id: product },
        function(err, res) {
          if (err) throw err;
          if (quantity <= res[0].stock_quantity) {
            console.log("success");
            //update database
            var updateSQL =
              "UPDATE products SET stock_quantity = " +
              (res[0].stock_quantity - quantity) +
              " WHERE id = " +
              product;
            connection.query(updateSQL, function(err, res) {
              if (err) throw err;

              console.log(
                "Your order has been placed! Your total is $" +
                  res[0].price * quantity
              );
              console.log(
                "this product will never arrive, but you can probably find the album on youtube."
              );

              // End the connection
              connection.end();
            });
          } else {
            console.log("Im sorry we dont have that many in stock! Please try again.");
            displayProducts();
          }
        }
      );
    });
}

//prompt

//The first should ask them the ID of the product they would like to buy.

//The second message should ask how many units of the product they would like to buy.

//check if your store has enough product in stock to meet the customer's request.

