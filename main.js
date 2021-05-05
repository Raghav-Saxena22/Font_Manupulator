noseX = 0;
noseY = 0;
right_wristX = 0;
left_wristX = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(550,500);
    canvas.position(560,125);

    poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}


function draw()
{
text("Raghav", noseX, noseY)
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results)
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    right_wristX = results[0].pose.rightWrist.x;
    left_wristX = results[0].pose.leftWrist.x;
}
}

function modelLoaded()
{
console.log("modelLoaded");
}

