const button = document.querySelector("#button");
const main = document.querySelector(".main");
const culmination = document.querySelector(".culmination");
const video = document.querySelector("#video");

button.addEventListener("click", function () {
  main.classList.remove("active");
  main.classList.add("nonactive");
  culmination.classList.remove("nonactive");
  playPause();
});

function playPause() {
  if (video.paused) video.play();
  else video.pause();
}
