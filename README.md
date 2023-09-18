# Nodejs-Crud

## Description
This is a simple CRUD (Create, Read, Update, Delete) web application built with Node.js and Express.js, utilizing MongoDB as the database with Mongoose for modeling and interacting with data. The application focuses on managing two main entities: users and products, with a special user-products relationship.

## Features
- User Management: Create, read, update, and delete user records.
- Product Management: Perform CRUD operations on product data.
- User-Product Relationship: Establish and manage relationships between users and products.

## Technologies
- Node.js runtime environment.
- Express.js framework.
- MongoDB NoSQL database.
- Mongoose library for MongoDB and Node.js.
- Nodemon library
- RESTful API: Implementing RESTful principles for clean API endpoints.
- Postman tool for testing and interacting with CRUD operations.

## Instructions
- Clone this repository to your local machine.
- Install the required dependencies using npm install.
- Configure your MongoDB connection string.
- Run the application using npm start.
- Access the API via http://localhost:3000 by default.

## API Endpoints

- **User Routes**:
  - `GET /api/users/`: Retrieve all users.
  - `GET /api/users/:username`: Retrieve a specific user by username.
  - `POST /api/users/`: Create a new user.
  - `PATCH /api/users/`: Update an existing user.
  - `DELETE /api/users/:username`: Delete a user.

- **Product Routes**:
  - `GET /api/products`: Retrieve all products.
  - `GET /api/products/:product/`: Retrieve a specific product by product_name.
  - `POST /api/products/`: Create a new product.
  - `PATCH /api/products/`: Update an existing product.
  - `DELETE /api/products/:product/`: Delete a product.

- **User-Product Routes**:
  - `GET /api/user-product/`: Retrieve all user's products.
  - `GET /api/user-product/stats`: Retrieve all stats for all users with products cost and quantity.
  - `GET /api/user-product/:username`: Retrieve a user's product.
  - `POST /api/user-product/`: Insert a product to a user.
  - `PATCH /api/user-product/:username`: Update a product in user.
  - `DELETE /api/user-product/:username/products/:product`: Delete a product from a user.
