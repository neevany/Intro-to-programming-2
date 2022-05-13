/*


*/



var sample;
var isReady;
var amplitude;
var amplitudes;

function preload()
{
    soundFormats('mp3','wav');
    
    isReady = false;
    
    //load your sounds here
    sample = loadSound('assets/parsRadio_loop.mp3', soundInit);
    sample.setVolume(0.5);
    
    amplitudes = [];
    for(var i = 0; i < 512; i++){
        amplitudes.push(0);
    }
    
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
        var a = amplitude.getLevel();
        amplitudes.push(a);
        amplitudes.shift();
        text(a, width/2, 32);
        var d = map(a, 0, 0.15, 50, 250);
        ellipse(width/2, height/2, d);
        
        noFill();
        stroke(255, 0, 0);
        beginShape();
        for(var i = 0; i < amplitudes.length; i++){
            var h = map(amplitudes[i], 0, 0.15, 0, -150);
            vertex(i * 2, height/2 + h);
        }
        endShape();
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
