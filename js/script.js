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

const cursorDot = document.querySelector(".cursor-dot");

cursorDot.style.left = `-20px`;
cursorDot.style.top = `-20px`;

document.addEventListener("mousemove", (e) => {
  // 直接使用鼠标位置，减去小圆点半径
  cursorDot.style.left = `${e.clientX - 10 + 1}px`;
  cursorDot.style.top = `${e.clientY - 10 + 1}px`;
});

document.addEventListener("mousedown", () => {
  cursorDot.classList.add("active");
});

document.addEventListener("mouseup", () => {
  cursorDot.classList.remove("active");
});
