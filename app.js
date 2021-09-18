const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const itemRoute = require("./routes/item_route");

const app = express();
dotenv.config({ path: "./.env" });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/item", itemRoute);
mongoose
  .connect(process.env.MONGODB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    const server = app.listen(process.env.PORT || 8080);
    console.log("connected");
  })
  .catch((error) => console.log(error));
