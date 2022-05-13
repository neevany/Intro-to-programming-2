/*

- Copy your game project code into this file
- for the p5.Sound library look here https://p5js.org/reference/#/libraries/p5.sound
- for finding cool sounds perhaps look here
https://freesound.org/


*/



var sample;
var isReady;
var amplitude;

function preload()
{
    soundFormats('mp3','wav');
    
    isReady = false;
    
    //load your sounds here
    sample = loadSound('assets/yee-king_track.mp3', soundInit);
    sample.setVolume(0.4);
    
    
}

function soundInit()
{
    isReady = true;
}


function setup()
{
	createCanvas(1024, 576);
    textAlign(CENTER);
    textSize(32);
    
    amplitude = new p5.Amplitude();

}

function draw()
{
    background(0);
    fill(255);
    noStroke();
    
    if(isReady && !sample.isPlaying())
    {
        text("Press any key to play sound", width/2, height/2);   
    }
    else if(sample.isPlaying())
    {
        var d = map (amplitude.getLevel(), 0, 0.15, 50,250);
        
        ellipse(width/2, height/2, d);
        
        
    }
}


function keyPressed()
{
    //sample.play();
    
    if(isReady && !sample.isPlaying())
    {
        sample.loop();
    }
    else if(sample.isPlaying())
    {
        sample.pause();
    }

}
