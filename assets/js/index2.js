
const bannerR = document.querySelector (".bannerR");
const bannerL = document.querySelector (".bannerL");
const btnTL = document.querySelector (".btnTL");
const btnBL = document.querySelector (".btnBL");
const btnTR = document.querySelector (".btnTR");
const btnBR = document.querySelector (".btnBR");


window.addEventListener("scroll", (e) => {
  

  if (window.scrollY > 800 && window.scrollY < 1400) {
    bannerR.style.left = 0;
    bannerL.style.right = 0;
    } else {
      bannerR.style.left = "2000px";
      bannerL.style.right = "2000px";
    }

})

window.addEventListener("resize", (e) => {

  let btnWitdh = window.innerWidth/4;
  btnTL.style.width = btnWitdh + "px";
  btnTL.style.height = btnWitdh/2 + "px";
  btnBL.style.width = btnWitdh + "px";
  btnBL.style.height = btnWitdh/2 + "px";
  btnTR.style.width = btnWitdh + "px";
  btnTR.style.height = btnWitdh/2 + "px";
  btnBR.style.width = btnWitdh + "px";
  btnBR.style.height = btnWitdh/2 + "px";
  btn.style.width = btnWitdh + "px";
  btn.style.height = btnWitdh/2 + "px";
})



