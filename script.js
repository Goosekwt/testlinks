document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('scrollVideo');
    var frameNumber = 0; // start video at frame 0
    var playbackConst = 1000; // lower numbers = longer scroll to play whole video
    var setHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Update video duration based on the length of scrolling
    var scrollPlay = function() {
        var frameNumber = window.pageYOffset / playbackConst;
        video.currentTime = frameNumber;
        window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
});
