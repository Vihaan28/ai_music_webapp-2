sound1="";
sound2="";

function setup(){
    canvas = createCanvas(500 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
   image( video , 0 , 0 , 500 , 400);

}

function preload(){
 sound=loadSound("music.mp3");
 sound=loadSound("song.mp3");

}

function play(){
    sound.play();

}

function stop(){
    sound.stop();

}


function pause(){
    sound.pause();
    
}
