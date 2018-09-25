window.onload = function (e) {
    $("#panImg").on("click", function (event) {
        var x = (event.pageX - this.offsetLeft) * getZoomScale();
        var y = (event.pageY - this.offsetTop) * getZoomScale();

        getPropLoc(this.clientWidth * getZoomScale(), this.clientHeight * getZoomScale(), x, y);
    });
}

function getPropLoc(width, height, x, y) {
    scale = 2200 / width;
    actualX = x * scale;
    actualY = y * scale;

    console.log("x: " + actualX);
    console.log("y: " + actualY);

    funnelLocations(actualX, actualY);
}

function funnelLocations(x, y) {
    if (x > 978 && x < 1160 && y < 830 && y > 594) {
        console.log("Store House");
    } else if (x > 858 && x < 1072 && y > 1034 && y < 1127) {
        console.log("Corral House");
    } else if (x > 1078 && x < 1182 && y > 1116 && y < 1210) {
        console.log("Buraeu of Reclamation");
    } else if (x > 1540 && x < 1672 && y > 484 && y < 594) {
        console.log("Officer's Quarters");
    } else if (x > 715 && x < 946 && y > 781 && y < 1094) {
        console.log("Visitor's Center");
    } else if (x > 1232 && x < 1430 && y > 605 && y < 731) {
        console.log("Office of the Depot Quartermaster");
    }
}

function chngSrc(mod) {
    src = document.getElementById("panImg").src;
    if (mod == "bath") {
        src = "images/mapBath.png";
    } else if (mod == "reg") {
        src = "images/map.png";
    }
    document.getElementById("panImg").src = src;
}

function getZoomScale() {
    var div = $('#panImg').css('transform');

    var values = div.split("(")[1];
    values = values.split(")")[0];
    values = values.split(",");

    var a = values[0];
    var b = values[1];

    var scale = Math.sqrt(a * a + b * b);
    if (scale != undefined) {
        return scale;
    } else {
        return 1;
    }
}

function ZoomIn() {
    var div = $('#panImg').css('transform');

    var values = div.split("(")[1];
    console.log(values);
    values = values.split(")")[0];
    values = values.split(",");

    var a = values[0];
    var b = values[1];

    var scale = Math.sqrt(a * a + b * b);
    if (scale < 3) {
        scale = scale * 1.1;
        document.getElementById("panImg").style.transform = "scale(" + scale + ")";
    }
}

function ZoomOut() {
    var div = $('#panImg').css('transform');

    var values = div.split("(")[1];
    console.log(values);
    values = values.split(")")[0];
    values = values.split(",");

    var a = values[0];
    var b = values[1];

    var scale = Math.sqrt(a * a + b * b);
    if (scale > 1) {
        scale = scale * 0.9;
        document.getElementById("panImg").style.transform = "scale(" + scale + ")";
    } else {
        document.getElementById("panImg").style.transform = "scale(1)";
    }
}