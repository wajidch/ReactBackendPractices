const express = require("express");

const router = express.Router();

router.get("/test", (req, res) =>
  res.json({ msg: "yeh dekho profile kam kr rahy" })
);

module.exports = router;
