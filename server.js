const express = require("express");
const connectDb = require("./config/db");
const dotenv = require("dotenv").config();
const blogRoutes = require("./routes/blogRoutes");

connectDb();

const app = express();

// middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

// set up routes for the /blogs endpoint
app.use("/blogs", blogRoutes);

// start the server
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
