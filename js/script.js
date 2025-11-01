function pop(imageURL) {
  var tcMainElement = document.querySelector(".tc-img");
  tcMainElement.src = "";
  if (imageURL) {
    tcMainElement.src = imageURL;
  }
  toggleClass(".tc-main", "active");
  toggleClass(".tc", "active");
}

var tc = document.getElementsByClassName("tc");
var tc_main = document.getElementsByClassName("tc-main");
tc[0].addEventListener("click", function (event) {
  pop();
});
tc_main[0].addEventListener("click", function (event) {
  event.stopPropagation();
});

function toggleClass(selector, className) {
  var elements = document.querySelectorAll(selector);
  elements.forEach(function (element) {
    element.classList.toggle(className);
  });
}
