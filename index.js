const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const authRoute = require("./Routes/auth");
const notesRoute = require("./Routes/notes");

connectToMongo();
const app = express();
const port = process.env.PORT || 5000; // Use a default port if not set in the environment

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", authRoute);
app.use("/api/notes", notesRoute);

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
