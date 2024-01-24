const mongoose = require("mongoose");
require("dotenv").config();

const URL = "mongodb+srv://sagarkori143:991787%40Abc@shoppingapi.xaxwqkw.mongodb.net/shoppingAPI?retryWrites=true&w=majority";

const dbConnect = () => {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB ka Connection successful");
    })
    .catch((error) => {
      console.log("Error in connection");
      console.log(error);
      process.exit(1);
    });
};

module.exports = dbConnect;
