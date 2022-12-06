song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristy = 0;

left_score = "";

song_status = "";


function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");

}


function modelLoaded(){
    console.log("Model is loaded!");
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        left_score = results[0].pose.keypoints[9].score;
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist X coordinates:" + leftWristX, "Left wrist Y coordinates:" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist X coordinates:" +rightWristX, "Right wrist Y coordinates:" + rightWristY);
        
    }


function draw(){
    image(video, 0, 0, 600, 500);
    song_status = song1.isPlaying();
    fill('red');
    stroke('red');

    if(left_score > 0.2){
        circle(leftWristX, leftWristY, 23);
        song_2.stop();

    if(song_satus = 'False')
        song1.play();
        document.getElementById("song_name_label").innerHTML = 'Kwaja Mere Kwaja'
}


}




}
