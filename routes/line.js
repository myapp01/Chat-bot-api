const express = require("express");
const router = express.Router();

// http://localhost:5000/line/callback
router.post("/callback", function (req, res,next) {
    res.send('line callback')
});

module.exports = router;