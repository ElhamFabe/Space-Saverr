var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../models')

const isAuthenticated = require("../config/middleware/isAuthenticated");

// User will land at amazon.html when query returns 'if user wants to see only amazon deals.'
router.get("/amazon", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../views/stores/amazon.html"));
});

// If user searches on Amazon will post in this route
router.post("/api/amazon", (req, res) => {
    db.create( 
        ["name", "price", "reviews"],
        [req.body.name, req.body.price, req.body.reviews],
        function(result) {
            res.json({ id: result.insertId })
    });
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