document.addEventListener("DOMContentLoaded", function() {
  var contentContainer = document.getElementById("content-container");
  var videoElement = document.getElementById("portraitAnimation");
  var increment = 0.2; // Adjust the increment for smoother scrolling

  // Initial video element
  createVideoElement();

  // Handle wheel events for mouse scrolling
  contentContainer.addEventListener("wheel", function(event) {
    // Check the direction of the wheel scroll
    var direction = (event.deltaY > 0) ? 1 : -1;

    // Adjust the playback time based on the wheel direction
    adjustPlayback(direction * increment);
  });

  // Handle touch events for mobile swiping
  var touchStartY;

  contentContainer.addEventListener("touchstart", function(event) {
    touchStartY = event.touches[0].clientY;
  });

  contentContainer.addEventListener("touchend", function(event) {
    var touchEndY = event.changedTouches[0].clientY;
    var swipeDirection = (touchEndY > touchStartY) ? -1 : 1;

    // Adjust the playback time based on the swipe direction
    adjustPlayback(swipeDirection * increment);
  });

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

  function adjustPlayback(seconds) {
    // Adjust the playback time of the current video element
    videoElement.currentTime += seconds;

    // Ensure the playback time stays within the video duration
    if (videoElement.currentTime < 0) {
      videoElement.currentTime = 0;
    } else if (videoElement.currentTime > videoElement.duration) {
      videoElement.currentTime = videoElement.duration;
    }
  }
});
