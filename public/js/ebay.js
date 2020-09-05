$(document).ready(function() {
  //   DO NOT TOUCH THIS IVAN, YOU SON OF A GUN!



  //   var catID = "";


  $(function () {
    $("#spaceSearch").click(function (e) {
        e.preventDefault();
        const searchText = document.getElementById('searchId').value;
        // clear the existing items.
        fetch(`/search?keyword=${searchText}`)
        .then(response => response.json())
        .then(data => {
            console.log("This is the data: "+ data[0].searchResult[0])
            let rowCounter = 0;
            // Selects the div with certain id according to size of search
            for (var i = 0; i < data[0].searchResult[0]["@count"]; i++) {

            if ((JSON.stringify(data).match('/' + data[0].searchResult[0].item[i].itemId[0] +'/gi') || []) > 1) {
              console.log("There was a duplicate in the search on item ID#" + data[0].searchResult[0].item[i].itemId[0]);
            } else {
              console.log("There was not a duplicate in the search on item ID#" + data[0].searchResult[0].item[i].itemId[0])
              console.log("Value of i: "+ i);
            var productInfo = {
            id: data[0].searchResult[0].item[i].itemId[0],
            title: data[0].searchResult[0].item[i].title,
            category: data[0].searchResult[0].item[i].primaryCategory[0].categoryName,
            category_id: data[0].searchResult[0].item[i].primaryCategory[0].categoryId,
            gallery_picture: data[0].searchResult[0].item[i].galleryURL,
            pictureURLLarge: data[0].searchResult[0].item[i].pictureURLLarge,
            listing_type: data[0].searchResult[0].item[i].listingInfo[0].listingType,
            current_price: data[0].searchResult[0].item[i].sellingStatus[0].currentPrice[0].__value__,
            ending_time: data[0].searchResult[0].item[i].listingInfo[0].endTime,
            watch_count: data[0].searchResult[0].item[i].listingInfo[0].watchCount,
            returns_accepted: data[0].searchResult[0].item[i].returnsAccepted[0],
            shipping_type: data[0].searchResult[0].item[i].shippingInfo[0].oneDayShippingAvailable,
            url_link: data[0].searchResult[0].item[i].viewItemURL[0],
            top_rated_listing: data[0].searchResult[0].item[i].topRatedListing[0]      
                };
                console.log("Product info: "+ JSON.stringify(productInfo));
                console.log("Img is " + productInfo.gallery_picture);
                 // Template literal innerHTML for each card
              if (typeof productInfo.gallery_picture !== "undefined") {
                console.log("Img is " + productInfo.gallery_picture + " in the if statement");
              var appendEbaySearch = `
              <article class="col-md-3" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                  <div class="front" style="background-image: url(${productInfo.gallery_picture})">
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
               
              
              if (((rowCounter % 4)==0) == true) {
                      console.log("If statement was hit:");
                      var sectionRow = $("<section>");
                      sectionRow.addClass("row");
                      sectionRow.attr("value", rowCounter);
                      $("#spaceCards").append(sectionRow);
                      $(appendEbaySearch).insertAfter('section[value=' + rowCounter + ']');
                      rowCounter++;
                      console.log("this if statement was hit with a counter of "+ rowCounter);
                      } else if (rowCounter === 0) {
                        console.log("this else statement was hit with a counter of "+ rowCounter);
                        $(appendEbaySearch).insertAfter('section[value=' + rowCounter + ']');
                        rowCounter++;
                      } else {
                        console.log("this else statement was hit with a counter of "+ rowCounter);
                        $(appendEbaySearch).insertAfter('section[value=' + (rowCounter - 1) + ']');
                      }

              console.log("This is the search count: "+ data[0].searchResult[0]["@count"]);
  
              } else {
                var appendEbaySearch = `
                <article class="col-md-3" ontouchstart="this.classList.toggle('hover');">
                  <div class="container">
                    <div class="front" style="background-image: url(https://unsplash.it/503/503/)">
                      <div class="inner">
                        <h3>${productInfo.title}</h3>
                        <p></p>
                        <span>Item Category: ${productInfo.category}</span>
                      </div>
                    </div>
                    <div class="back">
                      <div class="inner" style="background-image: url(https://unsplash.it/503/503/)">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>`;
                 
                
                if (rowCounter % 4 === 0) {
                        console.log("If statement was hit:");
                        var sectionRow = $("<section>");
                        sectionRow.addClass("row");
                        sectionRow.attr("value", rowCounter);
                        $("#spaceCards").append(sectionRow);
                        $(appendEbaySearch).insertAfter('section[value=' + rowCounter + ']');
                        rowCounter++;
                        console.log("this if statement was hit with a counter of "+ rowCounter);
                        } else {
                          console.log("this else statement was hit with a counter of "+ rowCounter);
                          $(appendEbaySearch).insertAfter('section[value=' + (rowCounter - 1) + ']');
                        }
              
                        
                      }
              
            }
              deals(data[0].searchResult[0].item[0].primaryCategory[0].categoryId);
          }  
          // renderData(data); // prints actual data to the page
      })
      .catch(error => console.log(error));
      }); 
  

  function deals(catID) {
    fetch("https://www.ebay.com/rps/feed/v1.1/ebay-us?eBayCatId=" + catID)
      .then(response => response.text())
      .then(response => JSON.stringify(response))
      .then(data => {
        parser = new DOMParser()
        doc = parser.parseFromString(data, "text/html");
        console.log(typeof doc, doc);
        // Test with a string.
        json = mapDOM(doc, true);
        let jsonResults = JSON.parse(json)
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
        // console.log(
        //   "We found " +
        //     (jsonResults.content[0].content[1].content[2].content.length - 1) +
        //     " deals for your searched category!"
        // )
        // test
        // jsonResults.content[0].content[1].content[2].content.length
        // let bool = true;
        // let rowCounter = 1;
        // let indexCounter = 1;
        // saverItemArray = [];
        // for (var i = 1; i < 8; i++) {
        //   for (var j = 0; j < 11; j++) {
        //     var saverItem1 =
        //       jsonResults.content[0].content[1].content[2].content[i].content[j]
        //         .type;
        //     var saverItem2 =
        //       jsonResults.content[0].content[1].content[2].content[i].content[j]
        //         .content;
        //     var saverItem = saverItem1 + ": " + saverItem2;
        //     // console.log("These are the saver items: " + saverItem + " This is the value of i: " + i + " This is the value of j: " + j);
        //     saverItemArray.push(saverItem);
            

        //     if (jsonResults.content[0].content[1].content[2].content[i].content[j]
        //       .type === "SHIPPINGCOST") {
        //       console.log("shipping cost if was hit: ");
            
        //     if (rowCounter % 4 === 0) {
        //       console.log("If statement was hit:");
        //       var sectionRow = $("<section>");
        //       sectionRow.addClass("row row"+rowCounter);
        //       $("#spaceCards").append(sectionRow);
        //       rowCounter++;
        //       } else if (bool === true) {
        //         var sectionRow = $("<section>");
        //         sectionRow.addClass("row row"+rowCounter);
        //         $("#spaceCards").append(sectionRow);
        //         bool = false;
        //         var article = $("<article>");
        //         article.addClass("col-md-3 " + "art" + indexCounter);
        //         article.attr("ontouchstart", "this.classList.toggle('hover');");
        //         $(".row row"+rowCounter).append(article);
        //         console.table(article);
        //         // <a>
        //         var a = $("<a>");
        //         a.addClass("ssLink"+indexCounter);
        //         a.attr("target", "0");
        //         $(article).append(a);
        //         // <div>
        //         var container = $("<div>");
        //         container.addClass("container " +"cont"+ indexCounter);
        //         $(a).append(container);
  
        //         // <div> inner
        //         var inner = $("<div>");
        //         inner.addClass("inner " + "int" + indexCounter);
        //         $(front).append(inner);
        //         // <p> deal
        //         var pTag = $("<p>");
        //         pTag.addClass(indexCounter);
        //         pTag.text("Space Saverr Deal");
        //         $(inner).append(pTag);
        //         // <span> SuperSaver
        //         var span = $("<span>");
        //         span.attr("id", "superSaver" + indexCounter);
        //         $(pTag).append(span);
        //         // <div> Back
        //         var backTag = $("<div>");
        //         backTag.attr("id","bimg"+indexCounter);
        //         $(span).append(backTag);
        //         // <div> innerBack
        //         var innerBack = $("<div>");
        //         innerBack.addClass("inner " + "back" + indexCounter);
        //         $(backTag).append(innerBack);
        //         // <p> dis
        //         var p1 = $("<p>");
        //         p1.attr("id","dis"+indexCounter);
        //         $(innerBack).append(p1);
        //         // <p> dPrice
        //         var p2 = $("<p>");
        //         p2.attr("id","dPrice"+indexCounter);
        //         $(innerBack).append(p2);
        //         // <p> oPrice
        //         var p3 = $("<p>");
        //         p3.attr("id","oPrice"+indexCounter);
        //         $(innerBack).append(p3);
  
        //         var title = saverItemArray[1].split("TITLE: "); // 1
        //         $("#superSaver" + indexCounter)
        //           .empty()
        //           .append(title[1]);
  
        //         var url = saverItemArray[2].split("URL: "); // 2
        //         $("#ssLink" + indexCounter).attr("href", url[1]);
                             
        //         var discount = saverItemArray[8].split("DISCOUNTPERCENTAGE:"); // 3
        //         $("#dis" + indexCounter)
        //           .empty()
        //           .append("Space Saverr Discount: " + discount[1] + "%");
  
        //         var currency = saverItemArray[5].split("CURRENCY:"); // 4
        //         var dPrice = saverItemArray[6].split("PRICE:");
        //         $("#dPrice" + indexCounter)
        //           .empty()
        //           .append("Space Saverr Price: " + currency[1] + " $" + dPrice[1]);
                
        //         var oPrice = saverItemArray[7].split("ORIGINALPRICE:"); // 5
        //         $("#oPrice" + indexCounter)
        //           .empty()
        //           .append("Original Price: " + currency[1] + " $" + oPrice[1]);
  
        //         var bgimg = saverItemArray[4].split("IMAGE225:");
        //         var trimedURL = bgimg[1].trim(); 
        //         // <div> image
        //         var front = $("<div>");
        //         front.addClass("front " + "frt" +indexCounter);
        //         $(front).css("background-image", "url(" + trimedURL + ")");
        //         $(container).append(front);
        //         console.log("All appends were run ");
  
        //     saverItemArray = [];
        //     indexCounter++;
        //     rowCounter++;
        //       } else {
        //       // <article>
        //       var article = $("<article>");
        //       article.addClass("col-md-3 " + "art" + indexCounter);
        //       article.attr("ontouchstart", "this.classList.toggle('hover');");
        //       $(".row row"+rowCounter).append(article);
        //       console.table(article);
        //       // <a>
        //       var a = $("<a>");
        //       a.addClass("ssLink"+indexCounter);
        //       a.attr("target", "0");
        //       $(article).append(a);
        //       // <div>
        //       var container = $("<div>");
        //       container.addClass("container " +"cont"+ indexCounter);
        //       $(a).append(container);

        //       // <div> inner
        //       var inner = $("<div>");
        //       inner.addClass("inner " + "int" + indexCounter);
        //       $(front).append(inner);
        //       // <p> deal
        //       var pTag = $("<p>");
        //       pTag.addClass(indexCounter);
        //       pTag.text("Space Saverr Deal");
        //       $(inner).append(pTag);
        //       // <span> SuperSaver
        //       var span = $("<span>");
        //       span.attr("id", "superSaver" + indexCounter);
        //       $(pTag).append(span);
        //       // <div> Back
        //       var backTag = $("<div>");
        //       backTag.attr("id","bimg"+indexCounter);
        //       $(span).append(backTag);
        //       // <div> innerBack
        //       var innerBack = $("<div>");
        //       innerBack.addClass("inner " + "back" + indexCounter);
        //       $(backTag).append(innerBack);
        //       // <p> dis
        //       var p1 = $("<p>");
        //       p1.attr("id","dis"+indexCounter);
        //       $(innerBack).append(p1);
        //       // <p> dPrice
        //       var p2 = $("<p>");
        //       p2.attr("id","dPrice"+indexCounter);
        //       $(innerBack).append(p2);
        //       // <p> oPrice
        //       var p3 = $("<p>");
        //       p3.attr("id","oPrice"+indexCounter);
        //       $(innerBack).append(p3);

        //       var title = saverItemArray[1].split("TITLE: "); // 1
        //       $("#superSaver" + indexCounter)
        //         .empty()
        //         .append(title[1]);

        //       var url = saverItemArray[2].split("URL: "); // 2
        //       $("#ssLink" + indexCounter).attr("href", url[1]);
                           
        //       var discount = saverItemArray[8].split("DISCOUNTPERCENTAGE:"); // 3
        //       $("#dis" + indexCounter)
        //         .empty()
        //         .append("Space Saverr Discount: " + discount[1] + "%");

        //       var currency = saverItemArray[5].split("CURRENCY:"); // 4
        //       var dPrice = saverItemArray[6].split("PRICE:");
        //       $("#dPrice" + indexCounter)
        //         .empty()
        //         .append("Space Saverr Price: " + currency[1] + " $" + dPrice[1]);
              
        //       var oPrice = saverItemArray[7].split("ORIGINALPRICE:"); // 5
        //       $("#oPrice" + indexCounter)
        //         .empty()
        //         .append("Original Price: " + currency[1] + " $" + oPrice[1]);

        //       var bgimg = saverItemArray[4].split("IMAGE225:");
        //       var trimedURL = bgimg[1].trim(); 
        //       // <div> image
        //       var front = $("<div>");
        //       front.addClass("front " + "frt" +indexCounter);
        //       $(front).css("background-image", "url(" + trimedURL + ")");
        //       $(container).append(front);
        //       console.log("All appends were run ");

        //   saverItemArray = [];
        //   indexCounter++;
        //   console.log("Appends were run, with a rowcounter of: "+ rowCounter);
        //       }
        //     }
        //     // console.log(jsonResults.content[0].content[1].content[2].content[i].content[j].type, ": " ,jsonResults.content[0].content[1].content[2].content[i].content[j].content);
        //       // var bgimg1 = saverItemArray[15].split("IMAGE225:");
        //       // // console.log(bgimg[1]);
        //       // $("#bimg2").css("background-image", "url('" + bgimg1[1] + "')");
        //     }


        //   }
        //   indexCounter = 1;
        //   rowCounter = 1;
        //   // Appending card title as per Space Saverr result
        //    // console.log(title);   
        //    // var title1 = saverItemArray[12].split("TITLE: ")
        //       // // console.log(title1);
        //       // $("#superSaver" + (k + 1))
        //       //   .empty()
        //       //   .append(title1[1])
        //       // Appending Links to SpaceSaverr Cards
          
          
        })
        // *****************************************************************
        // *                                                               *
        // * THIS SECTION CONTAINS ALL APPENDS IN THE SPACE SAVERR RESULTS *
        // *                                                               *
        // *****************************************************************
        //
        //
        // Appending Titles for SpaceSaverr Cards
        // console.log(saverItemArray);
        
        // End of conditional statement for appending Space Saverr Deals
        .catch(error => console.log(error));
      }

  });

// makeArticle.attr("id", "r" + i);
});

// console.log(url);
// var url1 = saverItemArray[13].split("URL: ")
              // // console.log(url1);
// Appending the Discount Percent, Discounted Price and Original Price
// console.log("Space Saverr Discount " + discount[1] + "%");
// console.log(currency[1]);
 // console.log("Space Saverr Price: " + currency[1] + " $" + dPrice[1]);
 // console.log("Original Price: $" + oPrice[1]);
              // $('#ssLink1').attr("href", url[1]);
              // var discount1 = saverItemArray[19].split("DISCOUNTPERCENTAGE:")
              // console.log("Space Saverr Discount " + discount1[1] + "%");
    
              // $("#dis2")
              //   .empty()
              //   .append("Space Saverr Discount: " + discount1[1] + "%");
              // var dPrice1 = saverItemArray[17].split("PRICE:");
              // console.log("Space Saverr Price: $" + dPrice1[1]);
              // $("#dPrice2")
              //   .empty()
              //   .append("Space Saverr Price: " + currency[1] + " $" + dPrice1[1]);
              // var oPrice1 = saverItemArray[18].split("ORIGINALPRICE:");
              // // console.log("Original Price: $" + oPrice1[1]);
              // $("#oPrice2")
              //   .empty()
              //   .append("Original Price: " + currency[1] + " $" + oPrice1[1]);
              // Generating Discount Cards Background Images
              // console.log(bgimg[1]);