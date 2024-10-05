# App: Basic CRUD API using Node.js

## Introduction

This project is a **Basic CRUD API** built with **Node.js**, providing essential functionalities for user management, including creating, reading, updating, and deleting (CRUD) operations. The API leverages popular libraries like **Express** for routing, **Mongoose** for MongoDB interactions, and **Passport** for authentication. The API is flexible and can be expanded to include further features or used as a backend for web or mobile applications.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [License](#license)
- [Contributors](#contributors)

## Features

- **CRUD Operations**: Perform create, read, update, and delete operations on user data.
- **User Authentication**: Includes support for user authentication using **JWT** and **Passport** strategies (e.g., Google OAuth).
- **Password Encryption**: Secure user passwords using **bcrypt**.
- **Session Management**: Session handling via **express-session**.
- **Email Notifications**: Built-in email support via **Nodemailer**.
- **MongoDB Integration**: Data is stored and retrieved from **MongoDB** using **Mongoose**.
- **Environment Variable Support**: Configure sensitive data using **dotenv**.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/app.git
   cd app

Install Dependencies:

Run the following command to install all necessary packages:

bash
Copy code
npm install
Set Up Environment Variables:

Create a .env file in the root directory and add the required environment variables (see Configuration below).

Run the API:

Start the server by running:

bash
Copy code
npm start
The server will be accessible at http://localhost:3000 by default.

Usage
Create a User: Send a POST request to /users with user data.
Read Users: Send a GET request to /users to retrieve all users or /users/:id for a specific user.
Update a User: Send a PUT request to /users/:id to update a user.
Delete a User: Send a DELETE request to /users/:id to delete a user.
Example Requests
Create User (POST):

bash
Copy code
POST /users
Content-Type: application/json
{
"username": "exampleUser",
"email": "user@example.com",
"password": "password123"
}
Get All Users (GET):

bash
Copy code
GET /users
Configuration
The application uses environment variables for configuration. Set up a .env file in the root directory of the project with the following variables:

bash
Copy code
PORT=3000
MONGO_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
EMAIL_HOST=smtp.yourmailserver.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
PORT: The port the API will run on (default: 3000).
MONGO_URI: MongoDB connection string.
JWT_SECRET: Secret key for JWT token generation.
GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET: Credentials for Google OAuth authentication.
EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS: Email service configuration for sending emails using Nodemailer.
Dependencies
This project uses the following Node.js modules:

bcrypt: Password hashing for user security.
body-parser: Middleware to parse incoming request bodies.
dotenv: Environment variable management.
express: Web framework for building the API.
express-session: Session management.
jsonwebtoken: JWT token generation for user authentication.
mongoose: MongoDB object modeling.
nodemailer: Email sending utility.
passport: Authentication middleware.
passport-google-oauth2: Google OAuth 2.0 strategy for Passport.
passport-google-oauth20: Alternative OAuth 2.0 strategy for Passport.
License
This project is licensed under the ISC License.

Contributors
Udara (Author)