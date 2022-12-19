const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

router.get("/all", postsController.findAll);
router.post("/create", postsController.create);

module.exports = router;
