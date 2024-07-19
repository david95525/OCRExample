var base64 = "";
const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
function startCam() {
    const constraints = { video: { facingMode: "user" } };
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
                videoElement.srcObject = stream;
                document.getElementById('capture').addEventListener("click", function () {
                    let canvas = document.createElement("canvas");
                    canvas.width = videoElement.videoWidth;
                    canvas.height = videoElement.videoHeight;
                    canvas.getContext("2d").drawImage(videoElement, 0, 0, canvas.width, canvas.height);

                    base64 = canvas.toDataURL("image/png", 1);
                    // 直接顯示在前端
                    let imageElement = document.createElement("img");
                    let containerElement = document.getElementById("imageContainer");
                    imageElement.src = base64;
                    imageElement.id = "avatar";
                    containerElement.innerHTML = "";
                    containerElement.appendChild(imageElement);
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
//document.getElementById('capture').addEventListener("click", async function () {
//    let file = document.getElementById('image').files[0];
//    base64 = await convertBase64(file);
//    document.getElementById("avatar").src = base64;
//});
document.getElementById('startCam').addEventListener("click", startCam);
document.getElementById('upload').addEventListener("click", Upload);
document.getElementById('ocr').addEventListener("click", ocr);

function Upload() {
    var base64String = base64.replace('data:image/png;base64,', '');
    let data = { imagestring: base64String };
    axios.post("/AzureAIVision/ImageAnalyze", data)
        .then(function (response) {
            if (response.status === 200) {
                let result = response.data;
                document.getElementById("sys").textContent = result.sys;
                document.getElementById("dia").textContent = result.dia;
                document.getElementById("pul").textContent = result.pul;

                document.getElementById("info").innerText = "   Please check the information.If it is correct, click Confirm.If not, click Try Again.";
                let confrombtn = document.getElementById('confirm');
                document.getElementById('upload').innerText = "Try again";
                confrombtn.removeAttribute("hidden");
                confrombtn.addEventListener("click", function () {
                    confrombtn.setAttribute("hidden","");
                    document.getElementById('upload').innerText = "finished";
                });
            }
        }).catch(err => { console.log(err); });
}
function ocr() {
    var base64String = base64.replace('data:image/png;base64,', '');
    let data = { imagestring: base64String };
    axios.post("/AzureAIVision/OCR", data)
        .then(function (response) {
            if (response.status === 200) {
                let result = response.data;
                document.getElementById("sys").textContent = result.sys;
                document.getElementById("dia").textContent = result.dia;
                document.getElementById("pul").textContent = result.pul;
            }
        }).catch(err => { console.log(err); });
}