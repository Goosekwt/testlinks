document.addEventListener("DOMContentLoaded", function() {
  var contentContainer = document.getElementById("content-container");

  // Initial video element
  createVideoElement();

  // Update playback position when the user scrolls
  window.addEventListener("scroll", function() {
    updatePlaybackPosition();

    // Check if the user has reached the bottom, and create a new video element
    if (isAtBottom()) {
      createVideoElement();
    }
  });

  function updatePlaybackPosition() {
    // Get the scroll position
    var scrollPosition = window.scrollY;

    // Iterate through existing video elements and update their playback position
    var videoElements = document.querySelectorAll(".portrait-animation");
    videoElements.forEach(function(videoElement) {
      var playbackPosition = mapRange(scrollPosition, 0, document.body.clientHeight, 0, videoElement.duration);
      videoElement.currentTime = playbackPosition;
    });
  }

  function createVideoElement() {
    // Create a new video element
    var newVideoElement = document.createElement("video");
    newVideoElement.className = "portrait-animation";
    newVideoElement.loop = true;
    newVideoElement.muted = true;
    newVideoElement.innerHTML = "Your browser does not support the video tag.";
    newVideoElement.src = "animation.mp4";

    // Append the new video element to the content container
    contentContainer.appendChild(newVideoElement);
  }

  function isAtBottom() {
    // Check if the user has reached the bottom of the page
    return window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  }

  // Helper function to map a value from one range to another
  function mapRange(value, fromMin, fromMax, toMin, toMax) {
    return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
  }
});
