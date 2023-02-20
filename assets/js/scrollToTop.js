function scrollToTop() {
  window.scrollTo(0, 0);
}
window.onscroll = function () {
myFunction();
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > 400) {
document
  .getElementById("goToTop")
  .setAttribute(
    "style",
    " opacity: 1; bottom:15px; visibility: visible;"
  );
} else {
document
  .getElementById("goToTop")
  .setAttribute(
    "style",
    " opacity: 0; bottom: -10px; visibility: hidden;"
  );
}

prevScrollpos = currentScrollPos;
};