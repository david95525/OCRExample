var customscanElement = document.getElementById('custom_Scan');
var customcloseElement = document.getElementById("custom_Close");
const urlstring = "https://westeurope.api.cognitive.microsoft.com/customvision/v3.0/Prediction/e5a38042-8d44-412e-ace3-6bc4e3c51bee/detect/iterations/Iteration10/image";
customscanElement.addEventListener("click", CustomstartCam);
customcloseElement.addEventListener("click", function () {
    Close();
    customcloseElement.setAttribute("hidden", "");
    customscanElement.removeAttribute("hidden");
    scanElement.removeAttribute("hidden");
});
function CustomstartCam() {
    scanElement.setAttribute("hidden", "");
    customscanElement.setAttribute("hidden", "");
    videoElement.removeAttribute("hidden");
    customcloseElement.removeAttribute("hidden");
    //scan
    const constraints = { video: { facingMode: "environment" } };
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
                videoElement.srcObject = stream;
                tracks = stream.getTracks();
                scanningElement.removeAttribute("hidden");
                timeoutID = window.setTimeout(function () {
                    //截圖上傳
                    let canvas = document.createElement("canvas");
                    let [width, height] = videoDimensions(videoElement);
                    canvas.width = width;
                    canvas.height = height;
                    let ctx = canvas.getContext("2d");
                    ctx.imageSmoothingEnabled = false;
                    ctx.drawImage(videoElement, 0, 0, width, height);
                    canvas.toBlob((blob) => {
                        if (blob) {
                            CustomImageAnalyze(blob);
                        }
                    })
                }, 2000);
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
var toplist = [0, 0, 0];
var numGroups = [[], [], []];
var leftGroups = [[], [], []];
var predictions = [];
function CustomImageAnalyze(customimage) {
    let config = {
        headers: {
            'Content-Type': 'application/octet-stream',
            'Prediction-Key': '3bb11496279642429fb7709b1953dab2'
        }
    }
    axios.post(urlstring, customimage, config)
        .then(function (response) {
            if (response.status === 200) {
                scanningElement.setAttribute("hidden", "");
                predictions = response.data.predictions;
                let topcontent = "";
                predictions.forEach((prediction) => {
                    //排除條件
                    if (prediction.probability <= 0.45 || isNaN(prediction.tagName)) return;
                    //篩選同高度
                    for (let i = 0; i < toplist.length; i++) {
                        //以第一個高度為基準
                        if (toplist[i] === 0) {
                            toplist[i] = Math.round(prediction.boundingBox.top * 100) / 100;
                            numGroups[i].push(parseInt(prediction.tagName));
                            leftGroups[i][0] = prediction.boundingBox.left;
                            topcontent = topcontent + " " + prediction.boundingBox.top;
                            return;
                        }
                        //第一個高度區間內視為同一列數字
                        if (toplist[i] + 0.034 > prediction.boundingBox.top && toplist[i] - 0.034 < prediction.boundingBox.top) {
                            topcontent = topcontent + " " + prediction.boundingBox.top;
                            numberHandling(prediction.boundingBox.left, parseInt(prediction.tagName), i);
                            return;
                        }
                    }
                });
                document.getElementById("topcontent").textContent = topcontent;
                let content = "";
                toplist.forEach((top) => { content = content + " " + top; });
                if (numGroups[0].length > 0) {
                    //先把num和top對應起來
                    let combined = toplist.map((top, index) => ({ top, number: parseInt(numGroups[index].join(''), 10) }));
                    //照高度小到大重排
                    combined.sort((a, b) => a.top - b.top);
                    //分別給予sys dia pul
                    var [sys, dia, pul] = combined.map(item => {
                        if (isNaN(item.number)) return 0;
                        else return item.number;
                    });
                    document.getElementById("content").textContent = content + " " + sys + " " + dia + " " + pul
                    renderPredictions([
                        { value: sys.toString(), x: 10, y: 25, x1: 0, x2: 0, y1: 0, y3: 0 },
                        { value: dia.toString(), x: 10, y: 65, x1: 0, x2: 0, y1: 0, y3: 0 },
                        { value: pul.toString(), x: 10, y: 105, x1: 0, x2: 0, y1: 0, y3: 0 }]);
                }
            }
        }).catch(err => { console.log(err); });
}
function numberHandling(predictionLeft = 0, number = 0, order = 0) {
    if (order < 0 || order > 2) return;
    var left = leftGroups[order];
    var num = numGroups[order];
    var max = predictionLeft;
    if (left.length === 1) {
        let point = Math.round(left[0] * 100) / 100;
        //是否和[0]數字重複
        if (predictionLeft < point + 0.02 && predictionLeft > point - 0.02 && number === num[0])
            return;
        //新值比[0]大 插入array最前面
        if (max < left[0]) {
            left.push(left[0]);
            num.push(num[0]);
            left[0] = max;
            num[0] = number;
        }
        //新值比[0]小 array最後新增
        if (max > left[0]) {
            left.push(max);
            num.push(number);
        }
        return;
    }
    if (left.length === 2) {
        //是否和[0]數字重複
        let point0 = Math.round(left[0] * 100) / 100;
        if (predictionLeft < point0 + 0.02 && predictionLeft > point0 - 0.02 && number === num[0])
            return;
        //是否和[1]數字重複
        let point1 = Math.round(left[1] * 100) / 100;
        if (predictionLeft < point1 + 0.02 && predictionLeft > point1 - 0.02 && number === num[1])
            return;
        //新值比[0]大 插入array最前面
        if (max < left[0]) {
            left.push(left[1]);
            num.push(num[1]);
            left[1] = left[0];
            num[1] = num[0];
            left[0] = max;
            num[0] = number;
        }
        //新值比[0]小 比[1]大 插入[1]前面
        else if (max < left[1]) {
            left.push(left[1]);
            num.push(num[1]);
            left[1] = max;
            num[1] = number;
        }
        //新值比[0][1]小 array最後新增
        else if (max > left[1]) {
            left.push(max);
            num.push(number);
        }
    }
}