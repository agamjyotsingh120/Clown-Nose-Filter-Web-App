noseX = 0;
noseY = 0;

function preload(){
clown_n = loadImage("https://i.postimg.cc/zvLtZdc5/455-4557163-icon-clown-nose-circle-hd-png-download-removebg-preview.png")
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}



function draw(){
image(video,0,0,300,300)

image(clown_n,noseX,noseY,65,45);
}

function take_snapshot(){
    save('myFilterImage.png');
}


function gotPoses(results){

    if(results.length > 0)
    {
        console.log(results);
        noseX =  results[0].pose.nose.x - 30;
        noseY =  results[0].pose.nose.y - 20;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        
    }
}


function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

