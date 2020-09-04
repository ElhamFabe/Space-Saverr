$(document).ready(function() {
  //   DO NOT TOUCH THIS IVAN, YOU SON OF A GUN!


  var productInfoArray = []

  //   var catID = "";
  var rowCounter = 1


  $(function () {
    $("#spaceSearch").click(function (e) {
        e.preventDefault();
        const searchText = document.getElementById('searchId').value;
        // clear the existing items.
        fetch(`/search?keyword=${searchText}`)
        .then(response => response.json())
        .then(data => {
            // Selects the div with certain id according to size of search
              
              deals(data[0].searchResult[0].item[0].primaryCategory[0].categoryId);

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
        saverItemArray = []
        for (var i = 1; i < 3; i++) {
          for (var j = 0; j < 11; j++) {
            var saverItem1 =
              jsonResults.content[0].content[1].content[2].content[i].content[j]
                .type
            var saverItem2 =
              jsonResults.content[0].content[1].content[2].content[i].content[j]
                .content
            var saverItem = saverItem1 + ": " + saverItem2
            console.log("These are the saver items: " + saverItem)
            saverItemArray.push(saverItem)
            // console.log(jsonResults.content[0].content[1].content[2].content[i].content[j].type, ": " ,jsonResults.content[0].content[1].content[2].content[i].content[j].content);
            if (
              jsonResults.content[0].content[1].content[2].content[i].content[j]
                .type === "SHIPPINGCOST"
            ) {
              console.log("==================================================")
            }
          }
        }

        console.log("Saver array", saverItemArray)
        // *****************************************************************
        // *                                                               *
        // * THIS SECTION CONTAINS ALL APPENDS IN THE SPACE SAVERR RESULTS *
        // *                                                               *
        // *****************************************************************
        //
        //
        // Appending Titles for SpaceSaverr Cards
        // console.log(saverItemArray);
        for (
          var i = 0;
          i < jsonResults.content[0].content[1].content[2].content.length - 1;
          i++
        ) {
          // Appending card title as per Space Saverr result
          var title = saverItemArray[1].split("TITLE: ")
          // console.log(title);
          $("#superSaver" + (i + 1))
            .empty()
            .append(title[1])
          var title1 = saverItemArray[12].split("TITLE: ")
          // console.log(title1);
          $("#superSaver" + (i + 1))
            .empty()
            .append(title1[1])
          // Appending Links to SpaceSaverr Cards
          var url = saverItemArray[2].split("URL: ")
          // console.log(url);
          $("#ssLink" + (i + 1)).attr("href", url[1])
          var url1 = saverItemArray[13].split("URL: ")
          // console.log(url1);
          $("#ssLink" + (i + 1)).attr("href", url1[1])
          // Appending the Discount Percent, Discounted Price and Original Price
          var discount = saverItemArray[8].split("DISCOUNTPERCENTAGE:")
          // console.log("Space Saverr Discount " + discount[1] + "%");
          $("#dis" + (i + 1))
            .empty()
            .append("Space Saverr Discount: " + discount[1] + "%")
          var currency = saverItemArray[5].split("CURRENCY:")
          // console.log(currency[1]);
          var dPrice = saverItemArray[6].split("PRICE:")
          // console.log("Space Saverr Price: " + currency[1] + " $" + dPrice[1]);
          $("#dPrice" + (i + 1))
            .empty()
            .append("Space Saverr Price: " + currency[1] + " $" + dPrice[1])
          var oPrice = saverItemArray[7].split("ORIGINALPRICE:")
          // console.log("Original Price: $" + oPrice[1]);
          $("#oPrice" + (i + 1))
            .empty()
            .append("Original Price: " + currency[1] + " $" + oPrice[1])
          // $('#ssLink1').attr("href", url[1]);
          var discount1 = saverItemArray[19].split("DISCOUNTPERCENTAGE:")
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
          var bgimg = saverItemArray[4].split("IMAGE225:")
          // console.log(bgimg[1]);
          $("#bimg" + (i + 1)).css(
            "background-image",
            "url('" + bgimg[1] + "')"
          )

          
          // var bgimg1 = saverItemArray[15].split("IMAGE225:");
          // // console.log(bgimg[1]);
          // $("#bimg2").css("background-image", "url('" + bgimg1[1] + "')");
        }
        // End of conditional statement for appending Space Saverr Deals
      })
      .catch(error => console.log(error))
  };

// makeArticle.attr("id", "r" + i);
});

});