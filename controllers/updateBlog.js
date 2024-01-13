const Blog = require("../models/blog");
const mongoose = require("mongoose");

const updateBlog = async (req, res) => {
  try {
    // Check if the provided id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid blog ID" });
    }

    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // update the blog properties with the provided values 
    blog.title = req.body.title || blog.title;
    blog.description = req.body.description || blog.description;
    blog.category = req.body.category || blog.category;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = updateBlog;
