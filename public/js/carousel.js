let carousel = document.querySelector(".carousel");
console.log(carousel);
let images = document.querySelectorAll(".carousel img");

let index = 1;

document.querySelector(".left-button").addEventListener("click", function(e) {
  makeInfinite(index);
//   console.log(index);
  images.forEach(img => (img.style.display = "none"));
  images[index].style.display = "block";
  index -= 1;
});

document.querySelector(".right-button").addEventListener("click", function(e) {
  makeInfinite(index);
//   console.log(index);
  images.forEach(img => (img.style.display = "none"));
  images[index].style.display = "block";
  index += 1;
});

window.addEventListener("load", function(e) {
  images[0].style.display = "block";
});

function makeInfinite(i) {
  if (i >= images.length) {
    index = 0;
  } else if (i < 0) {
    index = 3;
  }
}
