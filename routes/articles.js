const express = require("express");
const router = express.Router();

/**
 * Routing for Articles
 */
const ArticlesController = require("../controllers/ArticlesController");
const controller = new ArticlesController();

router.get("/liste", (req, res) => controller.liste(req, res));
router.get("/create", (req, res) => controller.create(req, res));
router.post("/store", (req, res) => controller.store(req, res));
router.post("/store/:id", (req, res) => controller.upgrade(req, res));
router.get("/update/:id", (req, res) => controller.update(req, res));
router.get("/remove/:id", (req, res) => controller.remove(req, res));
router.get("/visible/:id", (req, res) => controller.visible(req, res));
router.get("/invisible/:id", (req, res) => controller.invisible(req, res));
router.get("/:id", (req, res) => controller.show(req, res));

module.exports = router;
