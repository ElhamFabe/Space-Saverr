// time interval

var count = 4;
$("#spaceSearch").on("click", function(e) {
  e.preventDefault();
  $(".loading").show();
  $(".main").hide();
  $("#spaceCards").hide();
  var interval = setInterval(function() {
    count--;
    if (count === -1) {
      $(".loading").hide();
      $(".main").hide();
      $("#spaceCards").show();
      $("#searchId").show();
      // add searchbar
      $("#spaceSearch").show();

      counter = 4;
    }
  }, 1000);
});

var loginBool = false;

$(".login").on("click", function(e) {
  e.preventDefault();
  if (loginBool === false) {
    loginBool = true;
  } else {
    loginBool = false;
  }
});

$(".logout").on("click", function(e) {
  e.preventDefault();
  if (loginBool === true) {
    loginBool = false;
  } else {
    loginBool = true;
  }
});
// $(document).ready(function () {

//     $(".searchButton").on("click", function() {
//         var textBox = $(".searchBox").val();
//         console.log(textBox);
//     });

// });

// ajax for laoding and cards
// $('#wait').ajaxStart(function() {
//     $(this).show();
// }).ajaxComplete(function() {
//     $(this).hide();

// });
