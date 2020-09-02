const Ebay = require('ebay-node-api');

// let ebay = new Ebay({
//     clientID: 'CarloDeF-RutgersC-PRD-b46b9fe23-e9da986d',
//     clientSecret: 'PRD-46b9fe237cd6-af92-4748-a77b-e4bb',
//     body: {
//         grant_type: 'client_credentials',
//     //you may need to define the oauth scope
//     scope: 'https://api.ebay.com/oauth/api_scope'
//     }
// });

let ebay = new Ebay({
    clientID: 'CarloDeF-RutgersC-PRD-b46b9fe23-e9da986d',
    clientSecret: 'PRD-46b9fe237cd6-af92-4748-a77b-e4bb',
    body: {
        grant_type: 'client_credentials',
        scope: 'https://api.ebay.com/oauth/api_scope'

    }
});


// ebay.getAccessToken().then((data) => {
//     console.log(data); // data.access_token
// }, (error) => {
//     console.log(error);
// });

// ebay.findItemsByKeywords({
//     keywords: 'Garmin nuvi 1300 Automotive GPS Receiver',
//     sortOrder: 'PricePlusShippingLowest', //https://developer.ebay.com/devzone/finding/callref/extra/fndcmpltditms.rqst.srtordr.html
//     pageNumber: 2,
//     limit: 2
// }).then((data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error);
// });

// ebay.getMostWatchedItems({
//     maxResults: 3, // optional
//     categoryId: 267 // optional
// }).then((data) => {
//     if (data.errorMessage) {
//         console.log('Error:' + data.errorMessage);
//     }
//     console.log(JSON.stringify(data));
// });

    // get deals for specific country code and category
    // ebay.getDeals({
    //     limit: 5, // no of deals per request
    //     countryCode:'ebay-us', 
    //     eBayCatId: '' // deal for specific category id
    // }).then((data) => {
    //     console.log(data);
    // });

    // ebay.getDeals({
    //     limit: 12
    // }).then((data) => {
    //     console.log("This is the get deals data id: ", data.item[5]);
    //     console.log("This is the get deals data title: ", data.item[5].title);
    //     console.log("This is the get deals data Original Price: ", data.item[5].originalPrice);
    //     console.log("This is the get deals data Price: ", data.item[5].price);
    // });

    // search button listener
    var keySearch;
    var sortBy = "PricePlusShippingLowest";

$(".searchButton").on("click", function() {
    var textBox = $(".searchBox").val();
    keySearch = textBox;
    searchEbayByKeyword(keySearch, sortBy);
});

    console.log(keySearch);
    


function searchEbayByKeyword(keySearch, sortBy) {
    ebay.FindItemsByKeywords({
        keywords: keySearch,
        sortOrder: sortBy, //https://developer.ebay.com/devzone/finding/callref/extra/fndcmpltditms.rqst.srtordr.html
        pageNumber: 2,
        limit: 10
    }).then((data) => {
        console.log(data);
    }, (error) => {
        console.log(error);
    });
}

