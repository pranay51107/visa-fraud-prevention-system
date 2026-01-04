const express = require("express");
const router = express.Router();

router.get("/check-document", (req, res) => {
  res.json({
    status: "OK",
    message: "Document route working"
  });
});

router.post("/check-document", (req, res) => {
  res.json({
    status: "OK",
    message: "Document route working"
  });
});

module.exports = router;
