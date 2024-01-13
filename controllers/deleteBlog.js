const Blog = require("../models/blog");
const mongoose = require("mongoose");

const deleteBlog = async (req, res) => {
  try {
    // Check if the provided id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid blog ID" });
    }

    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteBlog;
