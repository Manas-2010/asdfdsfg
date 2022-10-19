function preload() {}

function setup() {
    console.log("Model Loading.")
    mobileNet = ml5.imageClassiflier("MobileNet", modelLoaded);
}

function modelLoaded() {
    mobileNet.on("moblieNet", gotresult);
    console.log("Model Loaded!");
}

function gotresult(error, result) {
    if (error) {
        console.error(error);
    } else if (result) {
        console.log(result);
        document.getElementsByID("mobileNetResult1").innerHTML = result[0].label;
    }
}