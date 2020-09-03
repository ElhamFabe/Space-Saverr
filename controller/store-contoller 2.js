var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../models");

const isAuthenticated = require("../config/middleware/isAuthenticated");

// User will land at amazon.html when query returns 'if user wants to see only amazon deals.'
// router.get("/amazon", isAuthenticated, (req, res) => {
//   res.sendFile(path.join(__dirname, "../views/stores/amazon.html"));
// });

// // If user searches on Amazon, search data will post in this route.
// router.post("/api/amazon", (req, res) => {
//   db.create(
//     ["name_a", "price_a", "reviews_a"],
//     [req.body.name, req.body.price, req.body.reviews],
//     function(result) {
//       res.json({ id: result.insertId });
//     }
//   );
// });

// // If user deletes search on Amazon, search data will be deleted using ID on amazon table.
// router.delete("/api/amazon/:id", (req, res) => {
//   var condition = "id=" + req.params.id;

//   db.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // User will land at ebay.html when query returns 'if user wants to see only ebay deals.'
// router.get("/ebay", isAuthenticated, (req, res) => {
//   res.sendFile(path.join(__dirname, "../views/stores/ebay.html"));
// });

// // If user searches on eBay, search data will post in this route.
// router.post("/api/ebay", (req, res) => {
//   db.create(
//     ["name_e", "price_e", "reviews_e"],
//     [req.body.name, req.body.price, req.body.reviews],
//     function(result) {
//       res.json({ id: result.insertId });
//     }
//   );
// });

// // If user deletes search on eBay, search data will be deleted using ID inside eBay table.
// router.delete("/api/ebay/:id", (req, res) => {
//   var condition = "id=" + req.params.id;

//   db.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // User will land at walmart.html when query returns 'if user wants to see only walmart deals.'
// router.get("/walmart", isAuthenticated, (req, res) => {
//   res.sendFile(path.join(__dirname, "../views/stores/walmart.html"));
// });

// // If user searches on Wal-Mart, search data will post in this route.
// router.post("/api/walmart", (req, res) => {
//   db.create(
//     ["name_w", "price_w", "reviews_w"],
//     [req.body.name, req.body.price, req.body.reviews],
//     function(result) {
//       res.json({ id: result.insertId });
//     }
//   );
// });

// // If user deletes search on Wal-Mart, search data will be deleted using ID inside Wal-Mart table.
// router.delete("/api/walmart/:id", (req, res) => {
//   var condition = "id=" + req.params.id;

//   db.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// User will land at spacesaver.html after login has been successful with query that will return results with deals from all pages.
// router.get("/store", isAuthenticated, (req, res) => {
//   res.sendFile(path.join(__dirname, "../views/stores/spacesaver.html"));
// });

// // If user searches on spacesaver.html, search data will post in this route.
// router.post("/api/store", (req, res) => {
//   db.create(
//     ["name_w", "price_w", "reviews_w"],
//     [req.body.name, req.body.price, req.body.reviews],
//     function(result) {
//       res.json({ id: result.insertId });
//     }
//   );
// });

// // If user deletes search on spacesaver.html, search data will be deleted using ID inside Wal-Mart table.
// router.delete("/api/store/:id", (req, res) => {
//   var condition = "id=" + req.params.id;

//   db.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // If user selects to log-in with Amazon account, this will allow the policy page to be created. 
// router.get("/policy_a", isAuthenticated, (req, res) => {
//   res.sendFile(path.join(__dirname, "../views/stores/policy_a.html"));
// });

// // If user rejects the Amazon/Wal-Mart/eBay account privacy policy page. 
// router.get("/thankyou", isAuthenticated, (req, res) => {
//   res.sendFile(path.join(__dirname, "../views/stores/policy_rejected.html"));
// });
// });

// // If user searches on spacesaver.html, search data will post in this route.
// router.post("/api/members", (req, res) => {
//   db.create(
//     ["name_w", "price_w", "reviews_w"],
//     [req.body.name, req.body.price, req.body.reviews],
//     function(result) {
//       res.json({ id: result.insertId });
//     }
//   );
// });

// // If user deletes search on spacesaver.html, search data will be deleted using ID inside Wal-Mart table.
// router.delete("/api/members/:id", (req, res) => {
//   var condition = "id=" + req.params.id;

//   db.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });
// >>>>>>> d81294bc72a314dbea062087f0a13076ddcf7648