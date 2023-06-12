var video = document.querySelector('video');
var canvas = document.querySelector('canvas');
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
function screenshot() {
    canvas.width = 640;
    canvas.height = 480;
    // 渲染
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
}