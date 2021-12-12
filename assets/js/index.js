let slide = [
  "./assets/img/tuto/blocked.png",
  "./assets/img/tuto/off.png",
  "./assets/img/tuto/charge.png",
  "./assets/img/tuto/forced.png",
];
const bannerR = document.querySelector(".bannerR");
const bannerL = document.querySelector(".bannerL");
const btnTL = document.querySelector(".btnTL");
const btnBL = document.querySelector(".btnBL");
const btnTR = document.querySelector(".btnTR");
const btnBR = document.querySelector(".btnBR");
const slideImg = document.querySelector(".slideImg")
const contentSlide = document.querySelector(".slide")

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 800 && window.scrollY < 1400) {
    bannerR.style.left = 0;
    bannerL.style.right = 0;
  } else {
    bannerR.style.left = "2000px";
    bannerL.style.right = "2000px";
  }
});

let btnWitdh = window.innerWidth / 4;
if (btnWitdh < 230) {
  btnWitdh = 230;
} else {
  btnTL.style.width = btnWitdh + "px";
  btnTL.style.height = btnWitdh / 2 + "px";
  btnTL.style.lineHeight = btnWitdh / 2 + "px";
  btnBL.style.width = btnWitdh + "px";
  btnBL.style.height = btnWitdh / 2 + "px";
  btnBL.style.lineHeight = btnWitdh / 2 + "px";
  btnTR.style.width = btnWitdh + "px";
  btnTR.style.height = btnWitdh / 2 + "px";
  btnTR.style.lineHeight = btnWitdh / 2 + "px";
  btnBR.style.width = btnWitdh + "px";
  btnBR.style.height = btnWitdh / 2 + "px";
  btnBR.style.lineHeight = btnWitdh / 2 + "px";
}

window.addEventListener("resize", (e) => {
  let btnWitdh = window.innerWidth / 4;
  if (btnWitdh < 230) {
    btnWitdh = 230;
  } else {
    btnTL.style.width = btnWitdh + "px";
    btnTL.style.height = btnWitdh / 2 + "px";
    btnTL.style.lineHeight = btnWitdh / 2 + "px";
    btnBL.style.width = btnWitdh + "px";
    btnBL.style.height = btnWitdh / 2 + "px";
    btnBL.style.lineHeight = btnWitdh / 2 + "px";
    btnTR.style.width = btnWitdh + "px";
    btnTR.style.height = btnWitdh / 2 + "px";
    btnTR.style.lineHeight = btnWitdh / 2 + "px";
    btnBR.style.width = btnWitdh + "px";
    btnBR.style.height = btnWitdh / 2 + "px";
    btnBR.style.lineHeight = btnWitdh / 2 + "px";
  }
});

function ChangeSlide() {
  slideImg.src = slide[Math.floor(Math.random() * slide.length)];
  
};
setInterval("ChangeSlide()", 4000);
