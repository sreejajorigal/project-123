function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(600,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw(){
    background("violet");
}
function modelLoaded(){
    console.log("poseNet is loaded");
}
function gotPoses(results){
    if(results.length>0);
    {
        console.log(results);
    }
}
