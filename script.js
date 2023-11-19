dodocdocument.addEventListener("DOMContentLoaded", function() {
  var contentContainer = document.getElementById("content-container");
  var videoElement = document.getElementById("portraitAnimation");
  var hammer = new Hammer(contentContainer);

  // Initial video element
  createVideoElement();

  // Handle wheel events for mouse scrolling
  contentContainer.addEventListener("wheel", function(event) {
    // Check the direction of the wheel scroll
    var direction = (event.deltaY > 0) ? 1 : -1;

    // Adjust the playback time based on the wheel direction
    adjustPlayback(direction);
  });

  // Handle swipe events using Hammer.js
  hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
  hammer.on('swipedown', function() {
    // Swipe down detected, trigger backward playback by one second
    adjustPlayback(-1);
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
  }
});
