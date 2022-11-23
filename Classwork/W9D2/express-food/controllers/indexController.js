const express = require("express");
const router  = express.Router();


router.get("/", (req, res) => {
    res.send("<a href='/fruits/'>Fruits</a><br />" +
             "<a href='/vegetables/'>Vegetables</a>");
});


module.exports = router;