noseX = 0;
noseY = 0;
mustacheX = 0;
mustacheY = 0;
hornX = 0;
hornY =0;
hairX =0;
hairY = 0;
eyesX= 0;
eyesY =0;
earsX = 0;
earsY= 0;
filterName = "";

function preload() {
  nose = loadImage("https://i.postimg.cc/2ygZyVcz/PH57-Dog-Nose-1-removebg-preview.png")
  mustache = loadImage("https://i.postimg.cc/4486937b/th-removebg-preview.png");
  horn = loadImage("https://i.postimg.cc/W4jFKRq1/th-removebg-preview.png");
  eyes = loadImage("https://i.postimg.cc/MK5pTcnq/th-removebg-preview.png");
  hair = loadImage("https://i.postimg.cc/BQVRMsy2/Hair-PNG-7.png");
  ears = loadImage("https://i.postimg.cc/8ktCkJJD/Easter-Bunny-Ears-PNG-Transparent-Image.png");
}
function setup() {
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide() ;

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoded() {
    console.log("PoseNet is Loaded");
}
function drop() {
    filterName = document.getElementById("filters").value;
    draw();
}
function draw() {
  image(video, 0 , 0, 300 , 300);
  if(filterName == "nose") {
    image(nose , noseX , noseY ,100 ,100);
  }
  if (filterName == "mustache"){
    image(mustache, mustacheX, mustacheY, 150, 50);
}
if (filterName == "eyes"){
    image(eyes, eyesX, eyesY, 100, 70);
}
if (filterName == "hair"){
    image(hair, hairX, hairY, 130, 120);
}
if (filterName == "horn"){
    image(horn, hornX, hornY, 180, 180);
}
if (filterName == "ears"){
    image(ears, earsX, earsY, 120, 100);
}


}
function take_snapshot() {
    save('myFilterImage.png');
}
function modelLoaded() {
    console.log('PoseNet is Intialized')
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-50;
        noseY = results[0].pose.nose.y-50;
        mustacheX = results[0].pose.nose.x-70;
        mustacheY = results[0].pose.nose.y-20;
        hornX = results[0].pose.rightEye.x - 70;
        hornY = results[0].pose.rightEye.y - 165;     
        hairX = results[0].pose.leftEye.x-70;
        hairY = results[0].pose.leftEye.y-100;
        eyesX = results[0].pose.leftEye.x-60;
        eyesY = results[0].pose.leftEye.y-30;
        earsX = results[0].pose.leftEar.x-100;
        earsY = results[0].pose.leftEar.y-80;
        
    }
}