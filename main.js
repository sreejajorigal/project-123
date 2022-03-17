 nosex=0;
 nosey=0;
 difference=0;
 leftWristx=0;
 rightWristx=0;
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
    document.getElementById("font").innerHTML="text size of the font= "+difference +"px";
    textSize(difference);
    fill("purple");
    stroke("black");
    text("SREEJA",nosex,nosey);
}
function modelLoaded(){
    console.log("poseNet is loaded");
}
function gotPoses(results){
    if(results.length>0);
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference=(leftWristx-rightWristx);
    }
}

