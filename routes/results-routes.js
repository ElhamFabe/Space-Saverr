const db = require("../models");
const path = require('path');
const express = require('express');

var router = express.Router();


// Pull the info in '/' and render the objResults
router.get("/", (req, res) => {
    db.all(function(data) {
        var objResult = {
            product_info: data,
            searches: data
        };
    res.render("index", objResult);
    })
});


// Create api with info provided from searches
router.post("/api/product_info", (req, res) => {
    
    product_info.create(
        ["name", "searchdata"],
        [req.body.name, req.body.searchdata],
        function(result) {
            res.json({ id: result.id });
        });

});

// Create api with info provided from searches
router.post("/api/searches", (req, res) => {
    
    searches.create(
        ["name", "searchdata"],
        [req.body.name, req.body.searchdata],
        function(result) {
            res.json({ id: result.searchId });
        });

});

// See products added to database through browser
router.get("/api/product_info", (req, res) => {
    db.all( (data) => {
        return res.json(data);
    });
});

// See searches added to database through browser
router.get("/api/searches", (req, res) => {
    db.all( (data) => {
        return res.json(data);
    });
});

// Populate cards with info in the database
router.put("/api/product_info/:id", (req, res) => {
    var condition = "id=" + re.params.id;

    product_info.update({
        spaceCards: req.body.spaceCards },
        condition,
        function(result) {
            if (result.changeRows == 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
    });
});

// router.put("/api/searches/:id", (req, res) => {
//     var condition = "id=" + re.params.searchId;

//     product_info.update({
//         spaceCards: req.body.spaceCards },
//         condition,
//         function(result) {
//             if (result.changeRows == 0) {
//                 return res.status(404).end();
//             }
//             else {
//                 res.status(200).end();
//             }
//     });
// });

module.exports = router;