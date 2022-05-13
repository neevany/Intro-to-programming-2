/*


*/



var sample;
var isReady;

function preload()
{
    soundFormats('mp3','wav');
    
    isReady = false;
    
    //load your sounds here
    sample = loadSound('assets/parsRadio_loop.mp3', soundInit);
    sample.setVolume(0.5);
    
    
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
