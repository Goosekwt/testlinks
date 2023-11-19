document.addEventListener("DOMContentLoaded", function() {
  var animationElement = document.querySelector(".portrait-animation");
  var lastScrollPosition = window.scrollY;

  // Update playback rate when the user scrolls
  window.addEventListener("scroll", function() {
    var currentScrollPosition = window.scrollY;
    var scrollDirection = (currentScrollPosition > lastScrollPosition) ? "down" : "up";

    // Set the playback rate based on scroll direction
    var playbackRate = (scrollDirection === "down") ? 1 : -1;

    // Set the playback rate for the animation
    animationElement.playbackRate = playbackRate;

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
  });
});
