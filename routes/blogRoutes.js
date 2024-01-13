const express = require("express");

// import the controllers for each route
const getOneBlog = require("../controllers/getOneBlog");
const getAllBlogs = require("../controllers/getAllBlogs");
const postBlog = require("../controllers/postBlog");
const updateBlog = require("../controllers/updateBlog");
const deleteBlog = require("../controllers/deleteBlog");

const router = express.Router();

// define routes and associate them with their respective controllers
router.get("/getOneBlog/:id", getOneBlog);
router.get("/getAllBlogs", getAllBlogs);
router.post("/addBlog", postBlog);
router.put("/updateBlog/:id", updateBlog);
router.delete("/deleteBlog/:id", deleteBlog);

module.exports = router;
