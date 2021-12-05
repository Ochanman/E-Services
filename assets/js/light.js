function lightMaker() {
  const light = document.createElement("span");
  document.body.appendChild(light);
  let size = Math.random() * 400 + 300 + "px";
  light.style.height = size;
  light.style.boxShadow  = "#e9f1f1 0px 0px " + Math.round(Math.random() * 40 + 20) + "px " + Math.round(Math.random() * 18 + 2) + "px";
  light.style.left = Math.random() * 100 + "%";
  light.style.top = Math.random() * 100 + 50 + "%";
  setTimeout(() => {
    light.remove();
  }, 10000);
}
setInterval(lightMaker, 300);



