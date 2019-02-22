(function () {
    const manifestUri = 'media/live.mpd';

    function handleChangeQuality(event) {
        const buttonId = event.target.id;
        if (buttonId === 'auto') {
            window.player.configure({ abr: { enabled: true }});
            return;
        }

        window.player.configure({ abr: { enabled: false }});
        const variantTracks = player.getVariantTracks();
        window.player.selectVariantTrack(variantTracks[parseInt(buttonId)]);
    }

    function initApp() {
        shaka.polyfill.installAll();

        if (shaka.Player.isBrowserSupported()) {
            initPlayer();
        } else {
            console.error('Browser not supported!');
        }
    }

    function initPlayer() {
        const video = document.getElementById('video');
        const player = new shaka.Player(video);

        window.player = player;
        player.addEventListener('error', onErrorEvent);
        player.load(manifestUri).then(function () {
            console.log('The video has now been loaded!');
            document.getElementById('auto').addEventListener('click', handleChangeQuality);
            document.getElementById('0').addEventListener('click', handleChangeQuality);
            document.getElementById('1').addEventListener('click', handleChangeQuality);
        }).catch(onError);
    }

    function onErrorEvent(event) {
        onError(event.detail);
    }

    function onError(error) {
        console.error('Error code', error.code, 'object', error);
    }

    document.addEventListener('DOMContentLoaded', initApp);
})();
