/** JS COMES HERE **/
function menuFunction() {
  var myNavigation = document.getElementById("head-nav");
  if (myNavigation.className === "close") {
    myNavigation.className = "open";
  } else {
    myNavigation.className = "close";
  }
}
