const Blog = require("../models/blog");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    if (blogs.length === 0) {
      res.json({ message: "There are no blogs available." });
    } else {
      res.json(blogs);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getAllBlogs;
