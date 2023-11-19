document.addEventListener("DOMContentLoaded", function() {
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", handleOrientation, true);
  } else {
    console.error("Device orientation not supported.");
  }

  function handleOrientation(event) {
    var rotation = event.gamma;
    var adjustedRotation = rotation * 2;
    document.querySelector(".portrait-animation").style.transform = "rotate(" + adjustedRotation + "deg)";
  }
});
