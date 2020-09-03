
//   DO NOT TOUCH THIS IVAN, YOU SON OF A GUN!
  
  const searchItems = document.getElementById('search-items');
  function renderData(data){
      const items = data[0].searchResult[0].item;
      items.forEach((searchItem) => {
          if(searchItem.title){
              let element = document.createElement('div');
              element.textContent = searchItem.title[0];
              searchItems.appendChild(element);
          }
      });
  }

//   var catID = "";

  function search(){
      const searchText = document.getElementById('searchId').value;
      // clear the existing items.
      searchItems.innerHTML = '';
      fetch(`/search?keyword=${searchText}`)
      .then(response => response.json())
      .then(data => {
          console.log(
          "Title: ", data[0].searchResult[0].item[0].title, "\n",
          "Product ID: ", data[0].searchResult[0].item[0].itemId[0], "\n",
          "Category Name: ", data[0].searchResult[0].item[0].primaryCategory[0].categoryName, "\n",
          "Category ID: ", data[0].searchResult[0].item[0].primaryCategory[0].categoryId, "\n", //NS
          "Gallery picture: ", data[0].searchResult[0].item[0].pictureURLLarge, "\n",
          "Listing Type: ", data[0].searchResult[0].item[0].listingInfo[0].listingType, "\n",
          "Current price: ", data[0].searchResult[0].item[0].sellingStatus[0].currentPrice[0].__value__, "\n", 
          "Ending time: ", data[0].searchResult[0].item[0].listingInfo[0].endTime, "\n", 
          "Watch count: ", data[0].searchResult[0].item[0].listingInfo[0].watchCount, "\n",
          "Returns accepted?: ", data[0].searchResult[0].item[0].returnsAccepted[0], "\n",
          "One day shipping available?: ", data[0].searchResult[0].item[0].shippingInfo[0].oneDayShippingAvailable, "\n",
          "URL link: ", data[0].searchResult[0].item[0].viewItemURL[0], "\n",
          "Entire data JSON: ", data
          );
          deals();
          // renderData(data); // prints actual data to the page
      })
      .catch(error => console.log(error));
  }


  function deals(){
    fetch(`ebay-us?eBayCatId=15032`) // ${searchText}
    .then(response => response.json())
    .then(data => {
        console.log(
        "Entire deals JSON: ", data
        );
        // renderData(data); // prints actual data to the page
    })
    .catch(error => console.log(error));
}

// //   http://www.ebay.com/rps/feed/v1.1/ebay-us/

// xmlToJson = function(xml) {
//     var obj = {};
//     if (xml.nodeType == 1) {                
//         if (xml.attributes.length > 0) {
//             obj["@attributes"] = {};
//             for (var j = 0; j < xml.attributes.length; j++) {
//                 var attribute = xml.attributes.item(j);
//                 obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
//             }
//         }
//     } else if (xml.nodeType == 3) { 
//         obj = xml.nodeValue;
//     }            
//     if (xml.hasChildNodes()) {
//         for (var i = 0; i < xml.childNodes.length; i++) {
//             var item = xml.childNodes.item(i);
//             var nodeName = item.nodeName;
//             if (typeof (obj[nodeName]) == "undefined") {
//                 obj[nodeName] = xmlToJson(item);
//             } else {
//                 if (typeof (obj[nodeName].push) == "undefined") {
//                     var old = obj[nodeName];
//                     obj[nodeName] = [];
//                     obj[nodeName].push(old);
//                 }
//                 obj[nodeName].push(xmlToJson(item));
//             }
//         }
//     }
//     return obj;
// }



// function dealsAPI() {
//     fetch('http://www.ebay.com/rps/feed/v1.1/ebay-us?eBayCatId=15032')
//         .then(function(response) {
//             var o = JSON.stringify(xmlToJson(response));
//             console.log("This is the response for deals: ", o);
//         }).then(function(response) {
    
//             // function callNews(myNews, myindex) {
//             //           var title = myNews.articles[myindex].title
//             //           var image = myNews.articles[myindex].image
//             //           var articleText = myNews.articles[myindex].description
//             //           var link = myNews.articles[myindex].url
//             //           var timeAgo = myNews.articles[myindex].publishedAt
//             //           var appendMe = $( ".news[value="+ myindex +"]" )
//             //           var titleText = $(".textNews[value="+ myindex +"]").text(title)
//             //           var imageSrc = $(".imageNews[value="+ myindex +"]").attr("src", image)
//             //           var articlesHTML = $(".articleNews[value="+ myindex +"]").text(articleText)
//             //           var linkLink = $(".linkNews[value="+ myindex +"]").attr("href", link)
//             //           var linkText = $(".linkNews[value="+ myindex +"]").text(link)
//             //           var timeAgoText = $(".timeAgo[value="+ myindex +"]").text(timeAgo)
//             //           appendMe.append(titleText, imageSrc, articlesHTML, linkLink, linkText, timeAgoText)
//             //           }
//             //           for (var i = 0; i < 3; i++) {
//             //             callNews(myJson, i)  
//             //           }
//                     });
//                 }
