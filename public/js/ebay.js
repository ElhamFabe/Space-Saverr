$(document).ready(function () {
//   DO NOT TOUCH THIS IVAN, YOU SON OF A GUN!

  const searchItems = document.getElementById('dealCards');
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
var rowCounter = 1;

  $(function () {
    $("#spaceSearch").click(function (e) {
        e.preventDefault();
        const searchText = document.getElementById('searchId').value;
        // clear the existing items.
        searchItems.innerHTML = '';
        fetch(`/search?keyword=${searchText}`)
        .then(response => response.json())
        .then(data => {
        
        // for (var i = 0; i < 6; i++) {
        //     var itemArray = ["id:"+ data[0].searchResult[0].item[i].itemId[0], "title:"+ data[0].searchResult[0].item[i].title, "category:"+ data[0].searchResult[0].item[i].primaryCategory[0].categoryName, "category_id:"+ data[0].searchResult[0].item[i].primaryCategory[0].categoryId, "gallery_picture:"+ data[0].searchResult[0].item[i].pictureURLLarge, "listing_type:"+ data[0].searchResult[0].item[i].listingInfo[0].listingType, "current_price:"+ data[0].searchResult[0].item[i].sellingStatus[0].currentPrice[0].__value__, "ending_time:"+ data[0].searchResult[0].item[i].listingInfo[0].endTime, "watch_count:"+ data[0].searchResult[0].item[i].listingInfo[0].watchCount, "returns_accepted:"+ data[0].searchResult[0].item[i].returnsAccepted[0], "shipping_type:"+ data[0].searchResult[0].item[i].shippingInfo[0].oneDayShippingAvailable, "url_link:"+ data[0].searchResult[0].item[i].viewItemURL[0], "top_rated_listing:"+ data[0].searchResult[0].item[i].topRatedListing[0]]
        //     productInfoArray.push(itemArray);
        // }
        console.log(data)
        for (var i = 0; i < data[0].searchResult[0]["@count"]; i++) {
            console.log(i);
          var productInfo = {
          id: data[0].searchResult[0].item[i].itemId[0],
          title: data[0].searchResult[0].item[i].title,
          category: data[0].searchResult[0].item[i].primaryCategory[0].categoryName,
          category_id: data[0].searchResult[0].item[i].primaryCategory[0].categoryId,
          gallery_picture: data[0].searchResult[0].item[i].pictureURLLarge,
          listing_type: data[0].searchResult[0].item[i].listingInfo[0].listingType,
          current_price: data[0].searchResult[0].item[i].sellingStatus[0].currentPrice[0].__value__,
          ending_time: data[0].searchResult[0].item[i].listingInfo[0].endTime,
          watch_count: data[0].searchResult[0].item[i].listingInfo[0].watchCount,
          returns_accepted: data[0].searchResult[0].item[i].returnsAccepted[0],
          shipping_type: data[0].searchResult[0].item[i].shippingInfo[0].oneDayShippingAvailable,
          url_link: data[0].searchResult[0].item[i].viewItemURL[0],
          top_rated_listing: data[0].searchResult[0].item[i].topRatedListing[0]      
              };


               // Template literal innerHTML for each card
            var appendEbaySearch = `
            <article class="col-md-3" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" style="background-image: url(${productInfo.gallery_picture}">
                  <div class="inner">
                    <h3>${productInfo.title}</h3>
                    <p></p>
                    <span>Item Category: ${productInfo.category}</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.
                    </p>
                  </div>
                </div>
              </div>
            </article>`;


            // Selects card section
            
            var mySection = document.querySelector("h1[id=dealCards]");
            // makes first row

            // Makes divs for each card

            // if (i === 0) {
            //     var makeFirstSection = $('<section>');
            //     makeFirstSection.addClass('row row1');
            //     $(mySection).append(makeFirstSection);
            // }

            // This is almost working, Ivan or Mo please try to finish it up! then we can mostly copy and paste for the deals!
            if (((i + 1) % 4) === 0) {
                rowCounter++;
                var makeSection4 = $('<section>');
                makeSection4.addClass('row row' + rowCounter);
                $(mySection).append(makeSection4);
                console.log(rowCounter, " Row counter");
                var makeArticle = $("<section>");
                makeArticle.attr("id", "r"+i);
                var rowSet = document.querySelector("section[class=row row" + rowCounter +"]");
                $(rowSet).append(makeArticle);
                var elements = document.querySelector("section[id=r" + i +"]");
                elements.innerHTML = appendEbaySearch;
            } else if (i === 0) {
                var makeFirstSection = $('<section>');
                makeFirstSection.addClass('row row1');
            } else {
                var makeArticle2 = $("<section>");
                makeArticle2.attr("id", "r"+i);
                var rowSet2 = document.querySelector("section[class=row row" + rowCounter +"]");
                $(rowSet2).append(makeArticle2);
                var elements2 = document.querySelector("section[id=r" + i +"]");
                elements2.innerHTML = appendEbaySearch;
            }


            
            


           

       
        
        

            // Selects the div with certain id according to size of search
              
              console.log("This is the appendEbaySearch: ", appendEbaySearch);
          }
        
        
        
          // for (var i = 0; i < 6; i++) {
          // var id = data[0].searchResult[0].item[i].itemId[0];
          //     productInfoArray.push(id);
          // var title = data[0].searchResult[0].item[i].title;
          //     productInfoArray.push(title);
          // var category = data[0].searchResult[0].item[i].primaryCategory[0].categoryName;
          //     productInfoArray.push(category);
          // var category_id = data[0].searchResult[0].item[i].primaryCategory[0].categoryId;
          //     productInfoArray.push(category_id);
          // var gallery_picture = data[0].searchResult[0].item[i].pictureURLLarge;
          //     productInfoArray.push(gallery_picture);
          // var listing_type = data[0].searchResult[0].item[i].listingInfo[0].listingType;
          //     productInfoArray.push(listing_type);
          // var current_price = data[0].searchResult[0].item[i].sellingStatus[0].currentPrice[0].__value__;
          //     productInfoArray.push(current_price);
          // var ending_time = data[0].searchResult[0].item[i].listingInfo[0].endTime;
          //     productInfoArray.push(ending_time);
          // var watch_count = data[0].searchResult[0].item[i].listingInfo[0].watchCount;
          //     productInfoArray.push(watch_count);
          // var returns_accepted = data[0].searchResult[0].item[i].returnsAccepted[0];
          //     productInfoArray.push(returns_accepted);
          // var shipping_type = data[0].searchResult[0].item[i].shippingInfo[0].oneDayShippingAvailable;
          //     productInfoArray.push(shipping_type);
          // var url_link = data[0].searchResult[0].item[i].viewItemURL[0];
          //     productInfoArray.push(url_link);
          // var top_rated_listing = data[0].searchResult[0].item[i].topRatedListing[0];
          //     productInfoArray.push(top_rated_listing);
          // }
          //   console.log(
          //   "Title: ", data[0].searchResult[0].item[0].title, "\n", // YES
          //   "Product ID: ", data[0].searchResult[0].item[0].itemId[0], "\n", // NS
          //   "Category Name: ", data[0].searchResult[0].item[0].primaryCategory[0].categoryName, "\n", // YES
          //   "Category ID: ", data[0].searchResult[0].item[0].primaryCategory[0].categoryId, "\n", //NS
          //   "Gallery picture: ", data[0].searchResult[0].item[0].pictureURLLarge, "\n", // YES
          //   "Listing Type: ", data[0].searchResult[0].item[0].listingInfo[0].listingType, "\n", // NO
          //   "Current price: ", data[0].searchResult[0].item[0].sellingStatus[0].currentPrice[0].__value__, "\n",  // YES
          //   "Ending time: ", data[0].searchResult[0].item[0].listingInfo[0].endTime, "\n", // YES
          //   "Watch count: ", data[0].searchResult[0].item[0].listingInfo[0].watchCount, "\n", // YES
          //   "Returns accepted?: ", data[0].searchResult[0].item[0].returnsAccepted[0], "\n", // YES
          //   "One day shipping available?: ", data[0].searchResult[0].item[0].shippingInfo[0].oneDayShippingAvailable, "\n", // YES
          //   "URL link: ", data[0].searchResult[0].item[0].viewItemURL[0], "\n", // NO
          //   "Top Rated Listing: ", data[0].searchResult[0].item[0].topRatedListing[0], "\n", // YES
          //   "Entire data JSON: ", data // NO
          //   );
            deals(data[0].searchResult[0].item[0].primaryCategory[0].categoryId);
            // renderData(data); // prints actual data to the page
        })
        .catch(error => console.log(error));
        })
        
        
        function deals(catID){  
        fetch('https://www.ebay.com/rps/feed/v1.1/ebay-us?eBayCatId=' + catID)
        .then(response => response.text())
        .then(response => JSON.stringify(response))
        .then(data => {
          parser = new DOMParser();
          doc = parser.parseFromString(data, "text/html");
          console.log(typeof doc, doc);
        
        // Test with a string.
        json = mapDOM(doc, true);
        let jsonResults = JSON.parse(json);
        console.log("This is the JSON object: ", JSON.parse(json));
        
        function mapDOM(element, json) {
        var treeObject = {};
        
        // If string convert to document Node
        if (typeof element === "string") {
          if (window.DOMParser) {
                parser = new DOMParser();
                docNode = parser.parseFromString(element,"text/xml");
          } else { 
                docNode = new ActiveXObject("Microsoft.XMLDOM");
                docNode.async = false;
                docNode.loadXML(element); 
          } 
          element = docNode.firstChild;
        }
        
        //Recursively loop
        function treeHTML(element, object) {
          object["type"] = element.nodeName;
          var nodeList = element.childNodes;
          if (nodeList != null) {
              if (nodeList.length) {
                  object["content"] = [];
                  for (var i = 0; i < nodeList.length; i++) {
                      if (nodeList[i].nodeType == 3) {
                          object["content"].push(nodeList[i].nodeValue);
                      } else {
                          object["content"].push({});
                          treeHTML(nodeList[i], object["content"][object["content"].length -1]);
                      }
                  }
              }
          }
          if (element.attributes != null) {
              if (element.attributes.length) {
                  object["attributes"] = {};
                  for (var i = 0; i < element.attributes.length; i++) {
                      object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                  }
              }
          }
        }
        treeHTML(element, treeObject);
        
        return (json) ? JSON.stringify(treeObject) : treeObject;
        }
        
        // Logs top 10 deals sorted by category that the user searched
        console.log("We found " + (jsonResults.content[0].content[1].content[2].content.length - 1) + " deals for your searched category!");
        
        for (var i = 1; i < jsonResults.content[0].content[1].content[2].content.length; i++) {
        for (var j = 0; j < 11; j++) {
          console.log(jsonResults.content[0].content[1].content[2].content[i].content[j].type, ": " ,jsonResults.content[0].content[1].content[2].content[i].content[j].content);
          if (jsonResults.content[0].content[1].content[2].content[i].content[j].type === "SHIPPINGCOST") {
              console.log("==================================================");
          }
        }
        }
        
        
        
        
        })
        .catch(error => console.log(error));
        
    }
});






// //   http://www.ebay.com/rps/feed/v1.1/ebay-us/
});