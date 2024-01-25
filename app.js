const res = document.querySelector(".res");
const yes = document.querySelector("button.yes");
const no = document.querySelector("button.no");

yes.addEventListener("click", function () {
  res.innerHTML = "Thanks for liking me back ❤️";
  yes.style.display = "none";
  no.style.display = "none";
});

no.addEventListener("mouseover", function () {
  var topVal = Math.floor(Math.random() * 100).toString();
  var botVal = Math.floor(Math.random() * 100).toString();
  no.style.top = topVal + "%";
  no.style.left = botVal + "%";
});
