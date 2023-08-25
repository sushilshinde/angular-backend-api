const express = require("express");
const router = express.Router();
const bookData = require("../assets/team-c/bookData.json");
const userData = require( "../assets/team-c/userDetails.json" );
const fs = require("fs");

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

router.get("/cartItems/:id", (req, res) => {
  const userId = req.params.id;
  const cart = JSON.parse( JSON.stringify( userData.users ) );
  const index = cart.findIndex((item) => item.id === +userId);
  res.json(userData.users[index]?.cartItems);
});

router.post("/cartItems/:id", async (req, res) => {
  const userId = req.params.id;
  const cart = JSON.parse( JSON.stringify( userData.users ) );
  const index = cart.findIndex((item) => item.id === +userId);
  cart[index].cartItems.push(req.body);
  userData.users[index].cartItems = cart[index].cartItems;
  writeUserData({ users: cart });
  res.send(userData.users);
});
router.patch("/cartItems/:id", async (req, res) => {
  const userId = req.params.id;
const cart = JSON.parse(JSON.stringify(userData.users));
  const index = cart.findIndex((item) => item.id === +userId);
  const products = await cart[index].cartItems.filter(
    (item) => item.id !== req.body.id
  );
  cart[index].cartItems = products;
  userData.users[index].cartItems = cart[index].cartItems;
  writeUserData({ users: cart });
  res.json(userData.users[index]?.cartItems);
});
router.patch("/cartItems-qty/:id", async (req, res) => {
  const userId = req.params.id;
const cart = JSON.parse(JSON.stringify(userData.users));
  const index = cart.findIndex((item) => item.id === +userId);
  const products = await cart[index].cartItems.find(
    (item) => item.id === req.body.id
  );
  products.quantity = req.body.quantity;
  const cindex = await cart[index].cartItems.findIndex(
    (item) => item.id === req.body.id
  );
  cart[index].cartItems[cindex] = products;
  userData.users[index] = cart[index];
  writeUserData({ users: cart });
  res.json(userData.users[index]?.cartItems);
});
router.get("/users", (req, res, next) => {
  try {
    const user = userData.users.find(
      (value) =>
        value.email === req.query.email && value.password === req.query.password
    );
    const isEmailValidate = userData.users.find(
      (value) => value.email === req.query.email
    );
    if (!isEmailValidate) throw new Error("User not found");
    const isPasswordValidate = userData.users.find(
      (value) =>
        value.email === req.query.email && value.password !== req.query.password
    );
    if (isPasswordValidate) throw new Error("Invalid Username/Password");
    const loggedUser = { users: { email:user.email,id: user.id,name:user.name,cartItems:user.cartItems } };
    res.json({ users: loggedUser });
  } catch (error) {
    error.status = "401";
    next(error);
  }
});
router.get("/userDetails", (req, res) => {
  res.json(userData.users);
});
router.post("/users", (req, res,next) => {
  try
  {
    const user = userData.users.find( ( value ) => value.email === req.body.email );
    if ( user ) throw new Error( `${req.body.email} is already registered` );
      const userId = userData.users.length;
      userData.users.push( { ...req.body, id: userId + 1, cartItems: [] } );
    writeUserData( userData );
    const RegisteredUser = {
      users: { email:req.body.email,name:req.body.name, id: userId + 1, cartItems: [] },
    };
      res.send({ users: RegisteredUser });   
  } catch (error) {
    error.status = "401";
    next(error);
  }
});

module.exports = router;
