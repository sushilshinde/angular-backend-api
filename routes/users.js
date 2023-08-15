var express = require("express");
const generateAccessToken = require("../config/jwt_generator");
const User = require("../models/User.model");
var router = express.Router();
const createError = require("http-errors");

/* GET users listing. */
router.get("/users", async function (req, res) {
  const user = await User.find().populate({
    path: "cartItem",
    populate: "product",
  });
  res.json(user);
});


router.get("/users/:id", async function (req, res) {
  const user = await User.findById(req.params.id).populate({
    path: "cartItem",
    populate: "product",
  });
  res.json(user);
});

router.patch("/add-cart/:id", async (req, res, next) => {
  const user = await User.findById(req.params.id);
  const { product, quantity } = req.body;
  user.cartItem.push({
    product,
    quantity,
  });
  const savedUser = await user.save();
  const suser = await User.findById(req.params.id).populate({
    path: "cartItem",
    populate: "product",
  });
  res.send(suser);
});

router.patch("/handle-cart-quantity/:id", async (req, res) => {
  const { cartId, quantity } = req.body;
  const user = await User.findById(req.params.id);
  const cart = user.cartItem.find((item) => item._id.toString() === cartId);
  cart.quantity = quantity || 1;
  await user.save();
  const suser = await User.findById(req.params.id).populate({
    path: "cartItem",
    populate: "product",
  });
  res.send(suser);
});

router.patch("/remove-cart/:id", async (req, res, next) => {
  const user = await User.findById(req.params.id);
  const { _id } = req.body;
  user.cartItem.pull({
    _id,
  });
  await user.save();
  const suser = await User.findById(req.params.id).populate({
    path: "cartItem",
    populate: "product",
  });
  res.send(suser);
});

router.post("/auth/register", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist)
      throw createError.Conflict(`${email} is already registered.`);
    const user = new User({
      email,
      password,
      cart: [],
    });
    const savedUser = await user.save();
    const accessToken = await generateAccessToken(savedUser.id);
    res.json({
      id: savedUser.id,
      accessToken,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/auth/login", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw createError.Conflict(`Invalid Username/Password`);

    const isValidPassword = await user.isValidPassword(password);
    if (!isValidPassword)
      throw createError.Unauthorized("Invalid Username/Password");

    const accessToken = await generateAccessToken(user.id);
    res.json({
      id: user.id,
      accessToken,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
