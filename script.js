document.addEventListener("DOMContentLoaded", function() {
  var animationElement = document.querySelector(".portrait-animation");

  // Set the initial playback rate based on scroll position
  updatePlaybackRate();

  // Update playback rate when the user scrolls
  window.addEventListener("scroll", function() {
    updatePlaybackRate();
  });

  function updatePlaybackRate() {
    // Get the scroll position
    var scrollPosition = window.scrollY;

    // Map the scroll position to the playback rate (adjust as needed)
    var playbackRate = mapRange(scrollPosition, 0, document.body.clientHeight, 1, 2);

    // Set the playback rate for the animation
    animationElement.playbackRate = playbackRate;
  }

  // Helper function to map a value from one range to another
  function mapRange(value, fromMin, fromMax, toMin, toMax) {
    return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
  }
});
