//Topic 1.1 
//Object orientation revisted
//part two

var flyingSaucer_x;
var flyingSaucer_y;
var flyingSaucer_width;
var flyingSaucer_height;

function setup()
{
    createCanvas(800,600);
    noStroke();
    
    flyingSaucer_x = 200;
    flyingSaucer_y = 100;
    flyingSaucer_width = 150;
    flyingSaucer_height = 100;
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
    //draw the flying saucer
    fill(175,238,238);
    arc(
        flyingSaucer_x,
        flyingSaucer_y,
        flyingSaucer_width/2,
        flyingSaucer_height,
        PI,TWO_PI)
    fill(150);
    arc(
        flyingSaucer_x,
        flyingSaucer_y,
        flyingSaucer_width,
        flyingSaucer_height/2,
        PI,TWO_PI);
    fill(50);
    arc(
        flyingSaucer_x,
        flyingSaucer_y,
        flyingSaucer_width,
        flyingSaucer_height/4,
        0,PI);
    
        
    //draw the lights
    for(var i = 0; i < 10; i++)
    {
        var x = flyingSaucer_x - flyingSaucer_width/2 + i * (flyingSaucer_width/9); 
        fill(255);
        ellipse(
            x,
            flyingSaucer_y,
            5,
            5
        )
    }
    
    
    flyingSaucer_x += random(-1,1);
    flyingSaucer_y += random(-1,1);
    
    
}