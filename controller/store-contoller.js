var express = require('express');
var router = express.Router();
var path = require('path');

const isAuthenticated = require("../config/middleware/isAuthenticated");

// User will land at amazon.html when query returns 'if user wants to see only amazon deals.'
router.get("/amazon", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../views/stores/amazon.html"));
});

// User will land at ebay.html when query returns 'if user wants to see only ebay deals.' 
router.get("/ebay", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../views/stores/ebay.html"));
});

// User will land at walmart.html when query returns 'if user wants to see only walmart deals.' 
router.get("/walmart", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../views/stores/walmart.html"));
})

// User will land at spacesaver.html after login has been successful.
router.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../views/stores/spacesaver.html"))
})