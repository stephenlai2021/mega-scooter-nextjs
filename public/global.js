const oHTML = document.querySelector("html");
const aWidth = oHTML.clientWidth;

oHTML.style.fontSize = (aWidth / 375) * 16 + "px";

window.addEventListener('resize', () => {
  const oHTML = document.querySelector("html");
  const aWidth = oHTML.clientWidth;

  oHTML.style.fontSize = (aWidth / 375) * 16 + "px";
})