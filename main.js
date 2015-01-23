$(document).ready(function () {

$(".TV").eq(0).click(function (event) {
  event.preventDefault();
  $(this).css("background-color", "blue");


});

$(".TV,.TV:before").eq(1).hover(function (event) {
  event.preventDefault();
  $(this).css("border-radius", "50%");
});

$(".TV").eq(2).mouseover(function (event) {
  event.preventDefault();
  $(this).css("opacity", ".5");
});

$(".TV").eq(3).on("dblclick", function () {
  document.write("hi ya'll");
});

});
