document.addEventListener("DOMContentLoaded", function() {
  var animationElement = document.querySelector(".portrait-animation");

  // Update playback rate when the user scrolls
  window.addEventListener("scroll", function() {
    playVideo();
  });

  function playVideo() {
    // Play the video
    animationElement.play();
  }
});
