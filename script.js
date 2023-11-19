document.addEventListener("DOMContentLoaded", function() {
  var animationElement = document.querySelector(".portrait-animation");
  var isPlaying = false;

  // Update playback rate when the user scrolls
  window.addEventListener("scroll", function() {
    if (!isPlaying) {
      playVideo();
      isPlaying = true;
    }
  });

  function playVideo() {
    // Play the video
    animationElement.play();
  }
});
