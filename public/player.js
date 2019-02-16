(function () {
    function initApp() {
        shaka.polyfill.installAll();

        if (shaka.Player.isBrowserSupported()) {
            initPlayer();
        } else {
            console.error('Browser not supported!');
        }
    }

    function initPlayer() {
        var video = document.getElementById('video');
        var player = new shaka.Player(video);

        window.player = player;
        player.addEventListener('error', onErrorEvent);
        player.load('media/live.mpd').then(function () {
            console.log('The video has now been loaded!');
            player.getTracks();
        }).catch(onError);
    }

    // player.selectVariantTrack(player.getVariantTracks()[1]);

    function onErrorEvent(event) {
        onError(event.detail);
    }

    function onError(error) {
        console.error('Error code', error.code, 'object', error);
    }

    document.addEventListener('DOMContentLoaded', initApp);
})();
