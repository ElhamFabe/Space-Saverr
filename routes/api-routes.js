// Requiring our models and passport as we've configured it
const db = require("../models")
const passport = require("../config/passport")
const Ebay = require("ebay-node-api")
const path = require("path")
const express = require("express")
const mysql = require("mysql")
// var catID = require('../public/js/ebay');

const ebay = new Ebay({
  clientID: "CarloDeF-RutgersC-PRD-b46b9fe23-e9da986d",
  headers: {
    // optional
    "X-EBAY-C-MARKETPLACE-ID": "EBAY_US", // For US https://www.ebay.com
  },
})

const ebay2 = new Ebay({
  clientID: "CarloDeF-RutgersC-PRD-b46b9fe23-e9da986d",
  clientSecret: "PRD-46b9fe237cd6-af92-4748-a77b-e4bb",
  body: {
    grant_type: "client_credentials",
    scope: "https://api.ebay.com/oauth/api_scope",
  },
})

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    })
  })

  // Ebay routes

  // load index.html
  app.get("/", (req, res) => res.sendFile(path.join(__dirname + "/index.html")))

  // create a route to search items in eBay.
  app.use("/search", function(req, res) {
    const queryParam = req.query
    // call the ebay api
    ebay
      .findItemsByKeywords({
        keywords: queryParam.keyword,
        sortOrder: "PricePlusShippingLowest", //https://developer.ebay.com/devzone/finding/callref/extra/fndcmpltditms.rqst.srtordr.html
        Condition: 3000,
        SoldItemsOnly: false,
        affiliate: {
          networkId: 9,
          trackingId: 1234567890,
        }, // This can be used if we get an affiliate Id in the future
      })
      .then(
        data => {
          return res.status(200).send(data)
        },
        error => {
          return res.status(404).send(data)
        }
      )
  })

  app.get("/search", function(req, res) {
    ebay2
      .getDeals({
        limit: 40, // no of deals per request
        countryCode: "ebay-us", // deal for specific category id
      })
      .then(
        data => {
          return res.status(200).send(data)
        },
        error => {
          return res.status(404).send(data)
        }
      )
  })
  // Ebay routes end

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, "/api/login")
      })
      .catch(err => {
        res.status(401).json(err)
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      })
    }
  })

  // route for getting product info to be used client side
  app.get("/api/product_info", (req, res) => {
    ebay
      .getInfo({
        id: req.body.id,
        title: req.body.title,
        category: req.body.category,
        category_id: req.body.category_id,
        gallery_picture: req.body.gallery_picture,
        listing_type: req.body.listing_type,
        current_price: req.body.current_price,
        ending_time: req.body.ending_time,
        watch_count: req.body.watch_count,
        returns_accepted: req.body.returns_accepted,
        shipping_type: req.body.shipping_type,
        url_link: req.body.url_link,
        top_rated_listing: req.body.top_rated_listing,
      })
      .then(
        data => {
          return res.status(200).send(data);
        },
        error => {
          return res.status(404).send(data);
        }
      );
  });
};
