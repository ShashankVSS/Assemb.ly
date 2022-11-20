var video = document.querySelector("#videoElement");
var clock = false;
var timer = document.getElementById('timer');
var picture;
var trigger = 4000;

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then(function(stream) {
        video.srcObject = stream
        video.play();
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
    if (clock === true) {
        trigger -= 1;
        if (trigger === 1) {
                vidisplay.scale(1, 1);
                picture = vidisplay.drawImage(video, 0, 0, 128, 128);

                function runPyScript(){
                  var jqXHR = $.ajax({
                      type: "POST",
                      url: "localhost:8000/scan",
                      async: false,
                      headers: {'Access-Control-Allow-Origin': '*'},
                      data: { file: im.toDataURL("image/png", 0).split(",")[1]}
                  });

                  return jqXHR.responseText;
              }
              result = runPyScript();
              document.getElementById('outBox').innerHTML = result;
              if (result == "No Mask"){
                document.getElementById("outBox").style.color = "red";
                document.getElementById("outBox").style.border = "2px solid red";
            } else if (result == "Correct") {
                document.getElementById("outBox").style.color = "green";
                document.getElementById("outBox").style.border = "2px solid green";
            } else {
                document.getElementById("outBox").style.color = "black";
                document.getElementById("outBox").style.border = "2px dashed black";
            }
              trigger = 4000;
        }
        
        timer.innerHTML = trigger / 1000;
    } 
    else {
        trigger = 4000;
        timer.innerHTML = trigger / 1000;
    }

}, 1);