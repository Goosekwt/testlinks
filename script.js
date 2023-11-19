document.addEventListener("DOMContentLoaded", function() {
  var contentContainer = document.getElementById("content-container");
  var videoElement = document.getElementById("portraitAnimation");
  var scrollStartY = 0;
  var isScrolling = false;

  // Initial video element
  createVideoElement();

  // Handle scroll events for custom scrolling behavior
  contentContainer.addEventListener("scroll", function() {
    if (!isScrolling) {
      isScrolling = true;
      scrollStartY = contentContainer.scrollTop;

      // Initiate the animation loop
      requestAnimationFrame(animateScroll);
    }
  });

  function animateScroll(timestamp) {
    var elapsed = timestamp - scrollStartY;
    var progress = Math.min(elapsed / 300, 1); // Adjust the duration

    // Use an easing function for smoother animation
    var easeProgress = easeOutQuad(progress);

    // Apply a transform to the video element
    videoElement.style.transform = "translateY(" + easeProgress * 100 + "vh)";

    // Continue the animation until it reaches the end
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    } else {
      isScrolling = false;
    }
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

  // Easing function for smoother animation
  function easeOutQuad(t) {
    return t * (2 - t);
  }
});
