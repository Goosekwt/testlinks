document.addEventListener("DOMContentLoaded", function() {
  var contentContainer = document.getElementById("content-container");
  var videoElement = document.getElementById("portraitAnimation");

  // Initial video element
  createVideoElement();

  // Handle scroll events for custom scrolling behavior
  contentContainer.addEventListener("scroll", function() {
    var scrollPosition = contentContainer.scrollTop;

    // Use an easing function for smoother animation
    var translateY = easeOutQuad(scrollPosition / 100) * 100;

    // Apply a transform to the video element
    videoElement.style.transform = "translateY(" + translateY + "vh)";
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

  // Easing function for smoother animation
  function easeOutQuad(t) {
    return t * (2 - t);
  }
});
