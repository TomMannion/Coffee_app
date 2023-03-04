const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

router.get("/all", postsController.findAll);
router.post("/create", postsController.create);
router.get("/origins", postsController.origins);
router.get("/brewMethods", postsController.brewMethods);
// find with filter criteria
router.get("/find", postsController.find);

module.exports = router;
