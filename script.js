document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('scrollVideo');
    var setHeight = document.documentElement.scrollHeight - window.innerHeight;
    var playbackConst = setHeight / 33; // Adjust this value as needed

    // Ensure video metadata is loaded
    video.addEventListener('loadedmetadata', function() {
        // Set up scroll event
        window.addEventListener('scroll', function() {
            var scrollPosition = window.pageYOffset;
            var videoTime = scrollPosition / playbackConst;
            video.currentTime = videoTime;
        });
    });
});
