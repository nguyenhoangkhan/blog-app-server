import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import route from "./routers/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
app.use(cors());

dotenv.config();

const app = express();
const methodOverride = require("method-override");
const PORT = process.env.PORT || 5000;
const URI = process.env.DB_URL;

// Override with POST method
app.use(methodOverride("_method"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Config Routes
route(app);

// Connect to MongoDB
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log("err", err));

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
