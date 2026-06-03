const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { users, refreshTokenWhitelist } = require("../data/mockDb");
const {
  createAccessToken,
  createRefreshToken,
  hashToken,
} = require("../utils/tokenUtils");

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Email and password are required",
      });
    }

    const user = users.find((u) => u.email === email);

    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid email or password",
      });
    }

    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user);

    refreshTokenWhitelist.push({
      userId: user.id,
      tokenHash: hashToken(refreshToken),
      createdAt: new Date(),
    });

    res.cookie("refreshToken", refreshToken, cookieOptions);

    res.status(200).json({
      status: "success",
      message: "Login successful",
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

const refresh = (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        status: "fail",
        message: "Refresh token missing. Please login again",
      });
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const tokenHash = hashToken(refreshToken);

    const validToken = refreshTokenWhitelist.find(
      (item) => item.userId === decoded.id && item.tokenHash === tokenHash
    );

    if (!validToken) {
      return res.status(403).json({
        status: "fail",
        message: "Refresh token is invalid or revoked",
      });
    }

    const user = users.find((u) => u.id === decoded.id);

    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "User no longer exists",
      });
    }

    const newAccessToken = createAccessToken(user);

    res.status(200).json({
      status: "success",
      message: "New access token issued",
      accessToken: newAccessToken,
    });
  } catch (error) {
    next(error);
  }
};

const logout = (req, res) => {
  res.clearCookie("refreshToken", cookieOptions);

  res.status(200).json({
    status: "success",
    message: "Logged out successfully",
  });
};

module.exports = {
  login,
  refresh,
  logout,
};
