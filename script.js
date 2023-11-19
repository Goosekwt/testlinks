document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('scrollVideo');
    var videoDuration = 33; // Duration of your video in seconds
    var lastScrollTop = 0; // Last scroll position

    function adjustVideoPlayback() {
        var scrollPercent = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
        var time = scrollPercent * videoDuration;
        video.currentTime = Math.min(time, video.duration);
    }

    window.addEventListener('scroll', function() {
        adjustVideoPlayback();
    });

    // Touch event listeners for mobile devices
    var touchStart = 0;

    window.addEventListener('touchstart', function(e) {
        touchStart = e.touches[0].pageY;
    }, false);

    window.addEventListener('touchmove', function(e) {
        var touchEnd = e.touches[0].pageY;
        var touchDistance = touchStart - touchEnd;
        window.scrollBy(0, touchDistance);
        adjustVideoPlayback();
    }, false);
});
