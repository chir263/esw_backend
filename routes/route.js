const express = require("express");

const router = express.Router();
const {
  getAllData,
  createCoordinate,
  getCoordinate,
} = require("../controllers/methods");

router.route("/").get(getAllData).post(createCoordinate);
router.route("/:t").get(getCoordinate);
module.exports = router;
