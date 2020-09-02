$(document).ready(function () {
    setTimeout (function () {
        $('#.loading')
    })

})

$('#spaceSearch').on('click', function (e){
    e.preventDefault();
    $('.loading').show();
    $('.main').hide();
    $('#spaceCards').hide();
})



// ajax for laoding and cards
// $('#wait').ajaxStart(function() {
//     $(this).show();
// }).ajaxComplete(function() {
//     $(this).hide();
// });