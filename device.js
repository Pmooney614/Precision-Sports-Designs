function detectDeviceInfo() {
  const ua = navigator.userAgent.toLowerCase();
  let deviceType;

  if (/iphone|android|mobile/.test(ua)) {
    deviceType = "phone";
  } else if (/ipad|tablet/.test(ua)) {
    deviceType = "ipad";
  } else {
    deviceType = "desktop";
  }

  // Actual screen size
  const width = window.innerWidth;
  const height = window.innerHeight;

  return { deviceType, width, height };
}

// Example usage
const info = detectDeviceInfo();
console.log("Device Type:", info.deviceType);
console.log("Width:", info.width, "px");
console.log("Height:", info.height, "px");
//--This thing above this text is just for testing delete after!!!--\\
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



