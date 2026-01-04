const express = require("express");
const router = express.Router();

router.get("/verify-consultant", (req, res) => {
  res.json({
    status: "OK",
    message: "Consultant route working"
  });
});

router.post("/verify-consultant", (req, res) => {
  res.json({
    status: "OK",
    message: "Consultant route working"
  });
});

module.exports = router;

