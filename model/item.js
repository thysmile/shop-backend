const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemType: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: Number,
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
  },
  itemImage: [
    {
      type: String,
      require: true,
    },
  ],
  itemQuantity: {
    type: Number,
  },
});
module.exports = mongoose.model("item", itemSchema);
