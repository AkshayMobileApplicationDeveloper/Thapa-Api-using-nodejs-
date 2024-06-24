const express = require("express");
const router = express.Router();

const { getllProducts, getllProductsTesting } = require("../controllers/products");

router.get("/", getllProducts);
router.get("/testing", getllProductsTesting);

module.exports = router;
