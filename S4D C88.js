(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume'), onResume.bind(this), false;

        document.getElementById("btnTakePhoto").onclick = function () {
            navigator.camera.getPicture(function (imageUri) {
                var lastPhotoContainer = document.getElementById("lastPhoto");

                alert("mooi!");

                lastPhotoContainer.innerHTML = "<img src'" + imageUri + "' style=width: 75%;' />";
            }, null, null);
        };

    };
    function onPause() {
    };
    function onResume() {
    };
})();