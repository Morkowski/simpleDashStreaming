(function () {
    function handleChangeQuality(event) {
        if (event.target.value === 'auto') {
            window.player.configure({ abr: { enabled: true }});
            return;
        }

        window.player.configure({ abr: { enabled: false }});

        var variantTracks = player.getVariantTracks();
        var selectedVariantTrack = variantTracks.find(variantTrack => variantTrack.id.toString() === event.target.value);
        window.player.selectVariantTrack(selectedVariantTrack);
    }

    function addOption({ label, selectElement, id }) {
        var optionElement = document.createElement('option');
        optionElement.innerHTML = label;
        optionElement.value = id;
        selectElement.appendChild(optionElement);
    }

    function addQualitySwitcher() {
        var variantTracks = player.getVariantTracks();
         if(variantTracks.length >= 2) {
            var switcher = document.getElementById('switcher');
            switcher.addEventListener('change', handleChangeQuality);

            addOption({ label: 'auto', id: 'auto', selectElement: switcher });

            variantTracks.map(function(variantTrack) {
                var label = variantTrack.width + '/' + variantTrack.height;
                addOption({ label: label, id: variantTrack.id, selectElement: switcher });
            });
         }
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
        var video = document.getElementById('video');
        var player = new shaka.Player(video);

        window.player = player;
        player.addEventListener('error', onErrorEvent);
        player.load('media/live.mpd').then(function () {
            console.log('The video has now been loaded!');
            addQualitySwitcher();

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
