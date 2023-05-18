const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "please provide name"],
      minlenght: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      require: [true, "please provide email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please provide valid email",
      ],
      unique: true,
      
    },
    password: {
      type: String,
      require: [true, "please provide password"],
      minlenght: 6,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", UserSchema);