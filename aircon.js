status = "";
objects = [];

function preload(){
    img = loadImage("ac.jfif");
}

function setup(){
    canvas = createCanvas(480, 380);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting objects.";
}

function modelLoaded(){
    console.log("model Loaded");
    status = true;
}

function gotResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
}