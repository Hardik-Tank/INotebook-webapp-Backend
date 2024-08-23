const mongoose = require("mongoose");
require("dotenv").config();
const URL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    mongoose.connect(URL);
    console.log("database is connect successfully!");
  } catch (error) {
    console.log("database is not connected");
  }
};

module.exports = connectDB;
