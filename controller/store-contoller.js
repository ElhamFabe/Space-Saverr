var express = require('express');
var router = express.Router();
var path = require('path');

const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/amazon", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../views/stores/amazon.html"));
});

router.get("/ebay", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/stores/ebay.html"));
});

router.get("/walmart", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/stores/walmart.html"));
})

// router.get("/members", isAuthenticated, (req, res) => {
//     res.sendFile(path.join(__dirname, "../views/stores/spacesaver.html"))
// })