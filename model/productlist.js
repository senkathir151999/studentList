const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: [true, "please provide name"] },
    course: { type: String, require: [true, "please provide course"] },
    city: { type: String, require: [true, "please provide city"] },
    image: { type: String, require: [true, "please provide image"] },
  },
  { timestamps: true }
);
module.exports = mongoose.model("product", productSchema);
