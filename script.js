document.addEventListener("DOMContentLoaded", function() {
  var animationElement = document.querySelector(".portrait-animation");

  // Update playback position when the user scrolls
  window.addEventListener("scroll", function() {
    updatePlaybackPosition();
  });

  function updatePlaybackPosition() {
    // Get the scroll position
    var scrollPosition = window.scrollY;

    // Calculate the playback position based on scroll position
    var playbackPosition = mapRange(scrollPosition, 0, document.body.clientHeight, 0, animationElement.duration);

    // Set the playback position for the animation
    animationElement.currentTime = playbackPosition;
  }

  // Helper function to map a value from one range to another
  function mapRange(value, fromMin, fromMax, toMin, toMax) {
    return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
  }
});
