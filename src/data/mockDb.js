const bcrypt = require("bcryptjs");

const users = [
  {
    id: "u1",
    email: "admin@aigenius.com",
    password: bcrypt.hashSync("password123", 12),
    role: "Admin",
  },
  {
    id: "u2",
    email: "premium@aigenius.com",
    password: bcrypt.hashSync("password123", 12),
    role: "Premium_User",
  },
  {
    id: "u3",
    email: "free@aigenius.com",
    password: bcrypt.hashSync("password123", 12),
    role: "Free_User",
  },
];

const refreshTokenWhitelist = [];

module.exports = {
  users,
  refreshTokenWhitelist,
};
