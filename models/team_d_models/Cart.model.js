const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  cartItem: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});
