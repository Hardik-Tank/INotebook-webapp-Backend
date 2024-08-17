const mongoose = require("mongoose");
require("dotenv").config();
const URL =
  "mongodb+srv://hardiktank2003:hardiktank1412@ibooks.2hn3r.mongodb.net/?retryWrites=true&w=majority&appName=IBooks";

const connectDB = async () => {
  try {
    mongoose.connect(URL);
    console.log("database is connect successfully!");
  } catch (error) {
    console.log("database not connect");
  }
};

module.exports = connectDB;
