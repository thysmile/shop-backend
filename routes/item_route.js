const express = require("express");
const controller = require("../controller/item_controller");
const imageUpload = require("../multer/multer");

const router = express.Router();

router.post("/post-item",  controller.postItem);
router.get("/get-item", controller.getItem);

module.exports = router;
