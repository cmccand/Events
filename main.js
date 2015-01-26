$(document).ready(function () {

$(".TV").eq(0).click(function (event) {
  event.preventDefault();
  $(this).css("background-color", "blue");

$(".TV").eq(0).click(function (event) {
    event.preventDefault();
    $(this).css("background-color", "red");
});
});

$(".TV").eq(1).hover(function (event) {
  event.preventDefault();
  $(this).css("border-radius", "50%");
},  function() {
  $(this).css("border-radius", "0%");

});

$(".TV").eq(2).mouseover(function (event) {
  event.preventDefault();
  $(this).css("opacity", ".5");
});
$(".TV").eq(2).mouseout(function (event) {
  event.preventDefault();
  $(this).css("opacity", "1");
});


$(".TV").eq(3).on("dblclick", function () {
  document.write("hi ya'll");
});

});
