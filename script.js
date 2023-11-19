document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('scrollVideo');
    var lastPosition = -1;
    var videoDuration = 33; // Duration of your video in seconds
    var setHeight = document.documentElement.scrollHeight - window.innerHeight;
    var maxScroll = setHeight - 10;

    function updateVideoOnScroll(scrollTop) {
        var scrollFraction = scrollTop / maxScroll;
        var frameIndex = Math.min(videoDuration * scrollFraction, videoDuration);
        video.currentTime = frameIndex;
        console.log('ScrollTop:', scrollTop, 'Video Time:', video.currentTime);
    }

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop != lastPosition) {
            updateVideoOnScroll(scrollTop);
            lastPosition = scrollTop;
        }
    }, false);

    var startTouchY;
    var touchSensitivity = 5;

    window.addEventListener('touchstart', function(e) {
        startTouchY = e.touches[0].clientY;
    }, false);

    window.addEventListener('touchmove', function(e) {
        var touchY = e.touches[0].clientY;
        var touchMove = startTouchY - touchY;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(touchMove) > touchSensitivity) {
            updateVideoOnScroll(scrollTop + touchMove);
        }
    }, false);
});
