const express = require("express");
const router = express.Router();
const bookData = require("../assets/team-c/bookData.json");
const cartData = require("../assets/team-c/cartItems.json");
const userData = require("../assets/team-c/userDetails.json");
const fs = require("fs");
const writeData = (jsonData) => {
  try {
    fs.writeFileSync(
      "assets/team-c/cartItems.json",
      JSON.stringify(jsonData),
      "utf8"
    );
  } catch (error) {
    console.error("Error writing data:", error);
  }
};
const writeUserData = (jsonData) => {
  try {
    fs.writeFileSync(
      "assets/team-c/userDetails.json",
      JSON.stringify(jsonData),
      "utf8"
    );
  } catch (error) {
    console.error("Error writing data:", error);
  }
};
router.get("/", (req, res) => {
  const teamAData = {
    team: "Team C",
    message: "Welcome to Team C endpoint!",
  };
  res.json(teamAData);
});

router.get("/books", (req, res) => {
  res.json(bookData.books);
});
router.get("/books/:id", async (req, res) => {
  const id = req.params.id;
  const books = JSON.parse(JSON.stringify(bookData.books));
  const products = await books.find((item) => item.id === +id);
  res.json(products);
});

router.get("/cartItems", (req, res) => {
  //{p:{id}}
  // const bookArray = ["vicky"]
  // console.log(cartData.cartItems);
  // res.json({
  //   id: cartData.cartItems[ 0 ].id,

  // });
  res.json(cartData.cartItems);
});

router.post("/cartItems", async (req, res) => {
  cartData.cartItems.push(req.body);
  writeData(cartData);
  res.send({ cartData });
});
router.delete("/cartItems/:id", async (req, res) => {
  const id = req.params.id;
  const cart = JSON.parse(JSON.stringify(cartData.cartItems));
  const products = await cart.filter((item) => item.id !== +id);
  cartData.cartItems = products;
  writeData({ cartItems: products });
  res.json(products);
});
router.patch("/cartItems/:id", async (req, res) => {
  const id = req.params.id;
  const cart = JSON.parse(JSON.stringify(cartData.cartItems));
  const index = cart.findIndex((item) => item.id === +id);
  cart[index].quantity = req.body.quantity;
  cartData.cartItems = cart;
  writeData({ cartItems: cart });
  res.json(cart);
});
router.get("/users", (req, res) => {
  res.json(userData.users);
});
router.post("/users", (req, res) => {
  userData.users.push(req.body);
  writeUserData(userData);
  res.send({ userData });
});

module.exports = router;
