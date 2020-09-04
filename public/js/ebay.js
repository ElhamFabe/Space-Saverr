
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
          // renderData(data); // prints actual data to the page
      })
      .catch(error => console.log(error));
  }

//   function searchDeals(){
//     fetch(`/deal_item?category_ids=${catID}`)
//     .then(response => response.json())
//       .then(data => {
//           console.log(data);
//           catID = "";
//       })
//       .catch(error => console.log(error));
//   }


