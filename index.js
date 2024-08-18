const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const authRoute = require("./Routes/auth");
const notesRoute = require("./Routes/notes");

connectToMongo();
const app = express();
const port = process.env.PORT || 5000; // Use a default port if not set in the environment

var whitelist = ["https://inotebooklibrary.vercel.app"]; //white list consumers
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "device-remember-token",
    "Access-Control-Allow-Origin",
    "Origin",
    "Accept",
  ],
};

app.use(cors(corsOptions));

app.use(express.json());

// Available Routes
app.use("/api/auth", authRoute);
app.use("/api/notes", notesRoute);

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
