const Blog = require("../models/blog");

const postBlog = async (req, res) => {
  const { title, description, category } = req.body;

  // Validate title, description, and category
  const validationErrors = [];

  if (!title || typeof title !== "string" || title.trim() === "") {
    validationErrors.push({
      field: "title",
      message: "Title is required and must be a non-empty string",
    });
  }

  if (
    !description ||
    typeof description !== "string" ||
    description.trim() === ""
  ) {
    validationErrors.push({
      field: "description",
      message: "Description is required and must be a non-empty string",
    });
  }

  if (!category || typeof category !== "string" || category.trim() === "") {
    validationErrors.push({
      field: "category",
      message: "Category is required and must be a non-empty string",
    });
  }

  if (validationErrors.length > 0) {
    return res
      .status(400)
      .json({ message: "Validation error", errors: validationErrors });
  }

  // Create a new blog instance
  const blog = new Blog({
    title: title.trim(),
    description: description.trim(),
    category: category.trim(),
    // Add other properties as needed
  });

  try {
    // Save the new blog
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = postBlog;
