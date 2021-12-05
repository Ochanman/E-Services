
const bannerR = document.querySelector (".bannerR");
const bannerL = document.querySelector (".bannerL");



window.addEventListener("scroll", (e) => {
  

  if (window.scrollY > 800 && window.scrollY < 1400) {
    bannerR.style.left = 0;
    bannerL.style.right = 0;
    } else {
      bannerR.style.left = "2000px";
      bannerL.style.right = "2000px";
    }

})




