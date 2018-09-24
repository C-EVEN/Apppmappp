var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtnOpen");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
    btn.style.display = "none";
    document.getElementById("popup").style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
    btn.style.display = "block";
    console.log("it passed");
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        console.log("it works");
        btn.style.display = "block";
    }
}
function lModal() {
    var x = document.getElementById("popup");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
});