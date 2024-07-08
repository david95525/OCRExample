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
document.getElementById('image').addEventListener("change", async function () {
    let file = document.getElementById('image').files[0];
    base64 = await convertBase64(file);
    document.getElementById("avatar").src = base64;
});
document.getElementById('upload').addEventListener("click", Upload);

function Upload() {
    var base64String = base64.replace('data:image/png;base64,', '');
    let data = { imagestring: base64String };
    axios.post("/AzureAIVision/Analyze", data)
        .then(function (response) {
            if (response.status === 200) {
                let result = response.data;
                document.getElementById("sys").textContent = result.sys;
                document.getElementById("dia").textContent = result.dia;
                document.getElementById("pul").textContent = result.pul;
            }
        }).catch(err => { console.log(err); });
}