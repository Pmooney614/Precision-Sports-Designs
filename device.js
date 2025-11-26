alert("Device.js loaded");
function detectDevice() {
  let w = window.innerWidth;
  let body = document.body;

  body.classList.remove("phone", "tablet", "desktop");

  if (w <= 768) {
    body.classList.add("phone");
  } 
  else if (w <= 1024) {
    body.classList.add("tablet");
  } 
  else {
    body.classList.add("desktop");
  }
}

window.addEventListener("load", detectDevice);
window.addEventListener("resize", detectDevice);

