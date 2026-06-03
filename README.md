# AI-Genius JWT Authentication & RBAC System

This project is a secure authentication and authorization backend for **AI-Genius**, a mock SaaS platform that provides access to AI text and image generation models.

The backend is built using **Node.js**, **Express.js**, **JWT**, **bcrypt**, and **Role-Based Access Control (RBAC)**.

---

## Project Overview

AI-Genius has three types of users:

1. **Admin**
2. **Premium_User**
3. **Free_User**

Because premium AI models are expensive to run, this backend strictly controls access using authentication, token expiration, refresh tokens, and role-based authorization.

---

## Features

- User login with hashed passwords
- Password hashing using bcrypt
- Access Token and Refresh Token system
- Short-lived Access Token
- Long-lived Refresh Token
- Refresh Token stored in httpOnly cookie
- JWT payload contains user id, email, and role
- Password is never stored inside JWT
- Authentication middleware using Bearer token
- Role-Based Access Control middleware
- Centralized error handling
- Mock AI endpoints for Free User, Premium User, and Admin
- Environment variables managed using dotenv

---

## Technologies Used

- Node.js
- Express.js
- JSON Web Token
- bcryptjs
- dotenv
- cookie-parser
- cors
- nodemon

---

## Project Structure

```text
WTASSIGNMENT3
│
├── src
│   ├── controllers
│   │   ├── aiController.js
│   │   └── authController.js
│   │
│   ├── data
│   │   └── mockDb.js
│   │
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── rbacMiddleware.js
│   │
│   ├── routes
│   │   ├── aiRoutes.js
│   │   └── authRoutes.js
│   │
│   ├── utils
│   │   └── tokenUtils.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md