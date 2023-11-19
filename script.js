dodocument.addEventListener("DOMContentLoaded", function() {
  var contentContainer = document.getElementById("content-container");
  var videoElement = document.getElementById("portraitAnimation");
  var hammer = new Hammer(contentContainer);

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

  // Handle swipe events using Hammer.js
  hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
  hammer.on('swipedown', function() {
    // Swipe down detected, trigger backward playback by one second
    adjustPlayback(-1);
  });

  function updatePlaybackPosition() {
    // Get the scroll position
    var scrollPosition = window.scrollY;

    // Iterate through existing video elements and update their playback position
    var videoElements = document.querySelectorAll(".portrait-animation");
    videoElements.forEach(function(videoEl) {
      var playbackPosition = mapRange(scrollPosition, 0, document.body.clientHeight, 0, videoEl.duration);
      videoEl.currentTime = playbackPosition;
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

  function adjustPlayback(seconds) {
    // Adjust the playback time of the current video element
    videoElement.currentTime += seconds;
  }

  // Helper function to map a value from one range to another
  function mapRange(value, fromMin, fromMax, toMin, toMax) {
    return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
  }
});
