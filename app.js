require("dotenv").config();
const express = require("express");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const connectDB = require("./DB/connect");
const app = express();
app.use(express.json({ limit: "50mb" }));

app.use(cors(corsOptions));
const userRouter = require("./routes/user")
const productRoute = require("./routes/products")

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/product", productRoute);
const port = process.env.PORT || 6000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)

    );
  } catch (error) {
    console.log(error);
  }
};

start();

