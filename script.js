let sliderImgElem = document.querySelector("img");
let preBtn = document.querySelector(".prev");
let nxtBtn = document.querySelector(".next");

let imgSrcArray = ["image/1.jpg", "image/2.png", "image/3.jpg"];

//for controling index of array
let imgIndex = 0;

function prevImg() {
  imgIndex--;

  if (imgIndex < 0) {
    //go to last index
    imgIndex = imgSrcArray.length - 1;
  }
  sliderImgElem.setAttribute("src", imgSrcArray[imgIndex]);
  console.log(imgIndex, imgSrcArray[imgIndex]);
}
function nextImg() {
  imgIndex++;
  if (imgIndex > imgSrcArray.length - 1) {
    //go to last index
    imgIndex = 0;
  }
  sliderImgElem.setAttribute("src", imgSrcArray[imgIndex]);
  console.log(imgIndex, imgSrcArray[imgIndex]);
}
setInterval(nextImg, 3000);
preBtn.addEventListener("click", prevImg);
nxtBtn.addEventListener("click", nextImg);
