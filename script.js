document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('scrollVideo');
    var lastScrollTop = 0;
    var videoDuration = 33; // Duration of your video in seconds
    var setHeight = document.documentElement.scrollHeight - window.innerHeight;
    var maxScroll = setHeight - 10; // 10 is a small offset

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var scrollFraction = scrollTop / maxScroll;
        var frameIndex = Math.min(videoDuration * scrollFraction, videoDuration);

        if (scrollTop > lastScrollTop) {
            // Scrolling Down
            video.currentTime = frameIndex;
        } else {
            // Scrolling Up
            video.currentTime = frameIndex;
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }, false);
});
