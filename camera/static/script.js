var video = document.querySelector("#videoElement");
var clock = false;
var timer = document.getElementById('timer');
var picture;

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then(function(stream) {
        window.stream = stream;
        video.srcObject = stream
        video.onloadedmetadata = function (e) {
            video.play();
        };
    }).catch(function(error) {
        console.log(error);
    });
}

var im = document.getElementById('vidisplay'),
    vidisplay = im.getContext('2d');

document.getElementById('image').addEventListener('load', function() {
});



function disppic() {
    picture = vidisplay.drawImage(video, image.width / 2, image.height / 2, 200, 200, 0, 0, 28, 28);
}

function oink() {
    if (clock === false) {
        clock = true;
    } else {
        clock = false;
    }
}

setInterval(() => {
    vidisplay.scale(1, 1);
    picture = vidisplay.drawImage(video, 0, 0, 1280, 960);

    function runPyScript(){
        var jqXHR = $.ajax({
            type: "POST",
            url: "http://26.248.219.225:8000/scan/",
            async: false,
            data: { file: im.toDataURL("image/png", 0).split(",")[1]}
        });

        return jqXHR.responseText;
    }
    result = runPyScript();
    console.log(result)
}, 10000);