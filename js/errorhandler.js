// TODO: there is much more to catch in JS
window.addEventListener("error", function (e) {
  document.getElementById().innerHTML += '<p>' + e.error.message + '</p>';
});
