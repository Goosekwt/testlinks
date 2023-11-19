document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('scrollVideo');
    var lastScrollTop = 0;
    var videoDuration = 33; // Video duration in seconds

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var delta = scrollTop - lastScrollTop;
        lastScrollTop = scrollTop;

        // Adjust playback speed and direction
        var timeToSeek = video.currentTime + (delta / 1000); // Smaller number = faster playback
        if (timeToSeek >= 0 && timeToSeek <= videoDuration) {
            video.currentTime = timeToSeek;
        }
    });
});
