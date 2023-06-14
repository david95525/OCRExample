import { createWorker } from 'tesseract.js';

var canvas = document.querySelector('canvas');
var video = document.querySelector('video');
//event
var startscan = document.getElementById("startscan");
var stopscan = document.getElementById("stopscan");
var scanid = 0;
startscan.addEventListener("click", function () {
    console.log("start");
    scanid = setInterval(screenshot, 5000);
});
stopscan.addEventListener("click", function () {
    clearInterval(scanid);
    console.log("stop");
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
});
//webRTC
var Constraints = {
    video: true
};
function handleSuccess(stream) {
    window.stream = stream; // 方便可以在瀏覽器console
    video.srcObject = stream;
}
function handleMediaStreamError(error) {
    console.log('navigator.getUserMedia error: ', error);
}
navigator.mediaDevices
    .getUserMedia(Constraints)
    .then(handleSuccess)
    .catch(handleMediaStreamError);
//canvas
function screenshot() {
    canvas.width = 640;
    canvas.height = 480;
    // 渲染
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    tesserajs();
}
//Tessera.js
function tesserajs() {
    let canvas_tessera = document.querySelector('canvas');
    let dataURL = canvas_tessera.toDataURL('image/png');
    (async () => {
        const worker = await createWorker(/*{ logger: m => console.log(m) }*/);
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(dataURL);
        if (text) {
            console.log(text);
        }
    })();
}