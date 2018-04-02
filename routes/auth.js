const express = require("express");
const router = express.Router();

/**
 * Routing for Auth
 */
const AuthController = require("../controllers/AuthController");
const controller = new AuthController();

router.get("/login", (req, res) => controller.login(req, res));

module.exports = router;
