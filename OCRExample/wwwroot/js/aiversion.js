var videoElement = document.getElementById("videoElement");
var scanElement = document.getElementById('Scan');
let scanningElement = document.getElementById("scanning_view");
var Rescan1Element = document.getElementById("Rescan1");
//input
var dateElement = document.getElementById('add_date_scan');
var hourElement = document.getElementById('hour_scan');
var minuteElement = document.getElementById('minute_scan');
var ap_modeElement = document.getElementById("ap_mode_scan");
var sysElement = document.getElementById('sys');
var diaElement = document.getElementById('dia');
var pulElement = document.getElementById('pul');
//date
let nowdate = moment(new Date()).format("YYYY/MM/DD");
dateElement.value = nowdate;
hourElement.value = 10;
minuteElement.value = 12;
function videoDimensions(video) {
    let videoRatio = video.videoWidth / video.videoHeight;
    let width = video.offsetWidth, height = video.offsetHeight;
    let elementRatio = width / height;
    if (elementRatio > videoRatio) width = height * videoRatio;
    else height = width / videoRatio;
    return [width, height];
}
document.getElementById("scan_save_button").addEventListener("click", Back);
scanElement.addEventListener("click", startCam);
function startCam() {
    scanElement.setAttribute("hidden", "");
    customscanElement.setAttribute("hidden", "");
    videoElement.removeAttribute("hidden");
    Rescan1Element.removeAttribute("hidden");
    //scan
    const constraints = { video: { facingMode: "environment" } };
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
                videoElement.srcObject = stream;
                tracks = stream.getTracks();
                scanningElement.removeAttribute("hidden");
                window.setTimeout(function () {
                    Capture_ver1_1(videoElement);
                }, 2000);
                Rescan1Element.addEventListener("click", function () {
                    Capture_ver1_1(videoElement);
                });
            })
            .catch(function (error) {
                console.log("無法取得視訊串流：", error);
                alert(
                    "您使用的瀏覽器不支援視訊串流，請使用其他瀏覽器，再重新開啟頁面！"
                );
            });
    } else {
        alert("您使用的瀏覽器不支援視訊串流，請使用其他瀏覽器，再重新開啟頁面！");
    }
}
function Capture_ver1_1(videoElement) {
    let canvas = document.createElement("canvas");
    let [width, height] = videoDimensions(videoElement);
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(videoElement, 0, 0, width, height);
    let base64 = canvas.toDataURL("image/png", 1);
    ImageAnalyze(base64);
}
function ImageAnalyze(base64) {
    var base64String = base64.replace('data:image/png;base64,', '');
    let data = { imagestring: base64String };
    let VerificationToken = document.getElementsByName("__RequestVerificationToken")[0].value;
    let config = { headers: { 'requestverificationtoken': VerificationToken } }
    let toplist = [];
    let numGroups = [];
    let predictions = [];
    let sys_dia_pul_y1 = [0, 0, 0];
    axios.post("/AiVision/ImageAnalyze", data, config)
        .then(function (response) {
            if (response.status === 200) {
                scanningElement.setAttribute("hidden", "");
                if (document.getElementById("result_show")) {
                    document.getElementById("result_show").remove();
                }
                let predictions = response.data.predictions;
                let scancontent = "";
                let ismicrolife = false;
                predictions.forEach((prediction) => {
                    if (prediction.tagName === "microlife") {
                        ismicrolife = true;
                    }
                    if (prediction.tagName === "SYS") {
                        sys_dia_pul_y1[0] = prediction.y1;
                    }
                    if (prediction.tagName === "DIA") {
                        sys_dia_pul_y1[1] = prediction.y1;
                    }
                    if (prediction.tagName === "PUL") {
                        sys_dia_pul_y1[2] = prediction.y1;
                    }
                    if (isNaN(prediction.tagName)) return;
                    let number = parseInt(prediction.tagName);
                    if (toplist[0] + 10 > prediction.y1 && toplist[0] - 10 < prediction.y1 && numGroups[0] === 1) {
                        number = number + 100;
                    }
                    toplist.push(prediction.y1);
                    numGroups.push(number);
                    scancontent = scancontent + " " + `number:${number} y1:${prediction.y1}`;
                });
                scancontent = scancontent + " " + `ismicrolife:${ismicrolife}`;
                document.getElementById("content").textContent = scancontent;
                if (!ismicrolife) return;
                let sys = numGroups[0] ?? 0, dia = numGroups[1] ?? 0, pul = numGroups[2] ?? 0;
                for (var i = 0; i < numGroups.length; i++) {
                    if (toplist[i] + 10 > sys_dia_pul_y1[0] && toplist[i] - 10 < sys_dia_pul_y1[0]) {
                        sys = numGroups[i];
                        continue;
                    }
                    if (toplist[i] + 10 > sys_dia_pul_y1[1] && toplist[i] - 10 < sys_dia_pul_y1[1]) {
                        if (sys === numGroups[i]) sys = 0;
                        dia = numGroups[i];
                        continue;
                    }
                    if (toplist[i] + 10 > sys_dia_pul_y1[2] && toplist[i] - 10 < sys_dia_pul_y1[2]) {
                        if (sys === numGroups[i]) sys = 0;
                        if (dia === numGroups[i]) dia = 0;
                        pul = numGroups[i];
                    }
                }
                sysElement.value = sys, diaElement.value = dia, pulElement.value = pul;
                let renders = [], index = 0;
                for (var i = 0; i < numGroups.length; i++) {
                    if (numGroups[i] != 0) {
                        renders.push({ value: numGroups[i].toString(), x: 10, y: 25 + index * 40, x1: 0, x2: 0, y1: 0, y3: 0 })
                        index++;
                    }
                }
                renderPredictions(renders);
            }
        }).catch(err => { console.log(err); });
}
const renderPredictions = function (predictions) {
    let canvas = document.createElement("canvas");
    canvas.id = "result_show";
    let [width, height] = videoDimensions(videoElement);
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d");
    predictions.forEach(function (prediction) {
        //if (prediction.x1 != 0 && prediction.value != "0") {
        //    let width = prediction.x2 - prediction.x1;
        //    let height = prediction.y3 - prediction.y1;
        //    ctx.strokeStyle = "red";
        //    ctx.lineWidth = 4;
        //    ctx.strokeRect(
        //        prediction.x1,
        //        prediction.y1,
        //        width,
        //        height
        //    );
        //}
        let textwidth = 10;
        let textheight = 10;
        let length = 1;
        if (prediction.value.length === 1) {
            length = 10;
        }
        else if (prediction.value.length === 2) {
            length = 4;
        }
        let x = (prediction.x + textwidth / 2);
        let y = (prediction.y + textheight / 2);
        ctx.fillStyle = "#00B5EC";
        ctx.fillRect(prediction.x, prediction.y, 44, 26);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.strokeRect(prediction.x, prediction.y, 44, 26)
        // Draw the text last to ensure it's on top.
        ctx.font = "20px sans-serif";
        ctx.textBaseline = "top";
        ctx.fillStyle = "white";
        ctx.fillText(prediction.value, x + length, y + 1);
    });
    document.body.append(canvas);
};
function Back() {
    let sys = document.getElementById("sys").value;
    let dia = document.getElementById("dia").value;
    let pul = document.getElementById("pul").value;
    let data = { sys: sys, dia: dia, pul: pul };
    let VerificationToken = document.getElementsByName("__RequestVerificationToken")[0].value;
    let config = { headers: { 'requestverificationtoken': VerificationToken } }
    axios.post("/AiVision/Back", data, config)
        .then(function (response) {
            if (response.status === 200) {
                let result = response.data;
                location.href = result.redirect_uri;
            }
        }).catch(err => { console.log(err); });
}

