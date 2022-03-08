const { Schema, model } = require("mongoose");

const shopSchema = new Schema(
  { 
    name: { type: String, required: true },
    img: { type: String, required: true},
    location: { type: String, required: true },
    rating: { type: Number, required: true },
    payment: {type: String,required: true},
    discount: { type: String, required: true}
  },
  {
    versionKey: false,
  }
);

module.exports = model("shop", shopSchema);
