let slide = ["./assets/img/blocked.png", "./assets/img/off.png", "./assets/img/charge.png", "./assets/img/forced.png"];

function ChangeSlide() {
   
    document.querySelector(".slideImg").src = slide[Math.floor(Math.random() * slide.length)];
    
}
setInterval("ChangeSlide()", 2000);