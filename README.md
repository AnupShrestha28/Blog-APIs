# Blog Management System

The Blog Management System is a web application designed for managing blogs. It provides functionalities for creating, retrieving, updating, and deleting blogs.

## Features

- **Get all blogs:** Retrieve a list of all blogs.
- **Get blog by Id:** Retrieve a specific blog by its ID.
- **Post blog:** Add a new blog.
- **Update blog:** Modify an existing blog.
- **Delete blog:** Remove a blog from the system.

## Technologies Used

- **Node.js:** Backend environment for running the application.
- **Express.js:** Web framework for handling routes and requests.
- **MongoDB:** Database system for storing blog data.
- **Mongoose:** Object Data Modeling (ODM) library for MongoDB in Node.js.

## API Endpoints

- **GET /blogs:** Retrieve all blogs.
- **GET /blogs/:id:** Retrieve a specific blog by ID.
- **POST /blogs:** Add a new blog.
- **PUT /blogs/:id:** Update a blog by ID.
- **DELETE /blogs/:id:** Delete a blog by ID.

## Getting Started

Follow these steps to set up and run the project locally.

## Environment Variables

Create a .env file in the root directory and add the following variables:

```env
PORT=3000
CONNECTION_STRING=mongodb://localhost:27017/blog_management_system

Run the Application

Install dependencies: npm install
Start the application: npm start

The server will be running on http://localhost:3000.
