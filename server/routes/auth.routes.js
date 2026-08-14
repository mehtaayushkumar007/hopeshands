const express = require("express");

const router = express.Router();

const {
  register,
  login,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/auth.middleware");

// Test
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Auth Route Working",
  });
});

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Get currently logged-in user
router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

module.exports = router;