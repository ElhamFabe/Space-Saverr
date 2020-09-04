
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
          "Title: ", data[0].searchResult[0].item[0].title, "\n", // YES
          "Product ID: ", data[0].searchResult[0].item[0].itemId[0], "\n", // NS
          "Category Name: ", data[0].searchResult[0].item[0].primaryCategory[0].categoryName, "\n", // YES
          "Category ID: ", data[0].searchResult[0].item[0].primaryCategory[0].categoryId, "\n", //NS
          "Gallery picture: ", data[0].searchResult[0].item[0].pictureURLLarge, "\n", // YES
          "Listing Type: ", data[0].searchResult[0].item[0].listingInfo[0].listingType, "\n", // NO
          "Current price: ", data[0].searchResult[0].item[0].sellingStatus[0].currentPrice[0].__value__, "\n",  // YES
          "Ending time: ", data[0].searchResult[0].item[0].listingInfo[0].endTime, "\n", // YES
          "Watch count: ", data[0].searchResult[0].item[0].listingInfo[0].watchCount, "\n", // YES
          "Returns accepted?: ", data[0].searchResult[0].item[0].returnsAccepted[0], "\n", // YES
          "One day shipping available?: ", data[0].searchResult[0].item[0].shippingInfo[0].oneDayShippingAvailable, "\n", // YES
          "URL link: ", data[0].searchResult[0].item[0].viewItemURL[0], "\n", // NO
          "Entire data JSON: ", data // NO
          );
          deals(data[0].searchResult[0].item[0].primaryCategory[0].categoryId);
          // renderData(data); // prints actual data to the page
      })
      .catch(error => console.log(error));
  }




  function deals(catID){  
    fetch('http://www.ebay.com/rps/feed/v1.1/ebay-us?eBayCatId=' + catID)
// ${searchText}
    .then(response => response.text())
    .then(response => JSON.stringify(response))
    .then(data => {
        parser = new DOMParser();
        doc = parser.parseFromString(data, "text/html");
        // console.log("Engage: ", doc.getElementById("html").innerHTML);
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
        } else { // Microsoft strikes again
              docNode = new ActiveXObject("Microsoft.XMLDOM");
              docNode.async = false;
              docNode.loadXML(element); 
        } 
        element = docNode.firstChild;
    }

    //Recursively loop through DOM elements and assign properties to object
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
// test
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



// //   http://www.ebay.com/rps/feed/v1.1/ebay-us/
