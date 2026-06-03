# AI-Genius Secure Authentication API

This repository contains the backend security module for **AI-Genius**, a sample SaaS-based AI platform. The system manages user login, JWT authentication, refresh tokens, and role-based access control for different AI model endpoints.

The project is developed using **Node.js**, **Express.js**, **JSON Web Tokens**, **bcryptjs**, and **RBAC middleware**.

---

## Overview

AI-Genius provides AI services to different user tiers. Since some AI models are only available to paid or administrative users, the backend must verify user identity and check user roles before allowing access.

The application supports three roles:

1. **Admin**
2. **Premium_User**
3. **Free_User**

Each role has different permissions for accessing the mock AI APIs.

---

## Main Features

- Secure user login system
- Passwords encrypted with bcryptjs
- JWT-based authentication
- Short expiry access token
- Long expiry refresh token
- Refresh token saved in an httpOnly cookie
- JWT stores only safe user information
- Protected routes using custom authentication middleware
- Role checking using RBAC middleware
- Separate access for Free, Premium, and Admin users
- Central error handling for invalid, missing, or expired tokens
- Configuration handled through environment variables

---

## Technologies

- Node.js
- Express.js
- JWT
- bcryptjs
- dotenv
- cookie-parser
- cors
- nodemon

---

## Folder Structure

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
├── thunder-collection.json
└── README.md