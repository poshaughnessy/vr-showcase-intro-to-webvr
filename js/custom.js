(function() {

    var SLIDE_BROWSER_LOGOS = 3,
        highContrastMode = false;

    init();

    function init() {

        setupUserEvents();

        setupSlideEvents();

    }

    function setupUserEvents() {

        document.addEventListener('keydown', onKeyDown, false);

    }

    function setupSlideEvents() {

        Reveal.addEventListener('slidechanged', onSlideChanged);

    }

    function onSlideChanged() {

        // Slide-specific animations...

        var slideNumber = Reveal.getIndices().h;

        if( slideNumber == SLIDE_BROWSER_LOGOS ) {

            // wait a moment to ensure it takes effect
            setTimeout(function() {
                document.getElementById('ff-logo').classList.add( 'animate' );
                document.getElementById('chrome-logo').classList.add( 'animate' );
            }, 50);

        } else {

            document.getElementById('ff-logo').classList.remove( 'animate' );
            document.getElementById('chrome-logo').classList.remove( 'animate' );

        }

    }

    function onKeyDown(e) {

        switch( e.keyCode ) {

            case 70: // f
                toggleFullScreen();
                break;

            case 72: // h
                toggleHighContrast();
                break;

        }

    }

    function toggleFullScreen() {

        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }

    }

    function toggleHighContrast() {

        var bodyEl = document.getElementsByTagName('body')[0];

        if( !highContrastMode ) {
            bodyEl.classList.add('high-contrast');
        } else {
            bodyEl.classList.remove('high-contrast');
        }

        highContrastMode = !highContrastMode;

    }

})();