document.addEventListener("DOMContentLoaded", function() {
  var animationElement = document.querySelector(".portrait-animation");
  var lastScrollPosition = 0;

  // Set the initial playback rate based on scroll position
  updatePlaybackRate();

  // Update playback rate when the user scrolls
  window.addEventListener("scroll", function() {
    updatePlaybackRate();
  });

  function updatePlaybackRate() {
    // Get the current scroll position
    var currentScrollPosition = window.scrollY;

    // Check the scroll direction
    var scrollDirection = (currentScrollPosition > lastScrollPosition) ? "down" : "up";

    // Set the playback rate based on scroll direction
    var playbackRate = (scrollDirection === "down") ? 1 : -1;

    // Set the playback rate for the animation
    animationElement.playbackRate = playbackRate;

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
  }
});
