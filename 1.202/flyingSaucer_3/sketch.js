//Topic 1.1 
//Object orientation revisted
//part two

var flyingSaucer;

function setup()
{
    createCanvas(800,600);
    noStroke();
    
    flyingSaucer = {
        x: 200,
        y: 100,
        width: 250,
        height: 100,
        window_width: 0.75,
        window_height: 0.85,
        base_height: 0.45,
        num_lights: 20,
        brightnesses: []
    }
    
    
    for(var i = 0; i < flyingSaucer.num_lights; i++)
    {
        flyingSaucer.brightnesses.push((i * 20)%255);
    }
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
    //draw the flying saucer
    
    //draw the window
    fill(175,238,238);
    arc(
        flyingSaucer.x,
        flyingSaucer.y,
        flyingSaucer.width * flyingSaucer.window_width,
        flyingSaucer.height * flyingSaucer.window_height,
        PI,TWO_PI);
    
    //draw the body
    fill(150);
    arc(
        flyingSaucer.x,
        flyingSaucer.y,
        flyingSaucer.width,
        flyingSaucer.height/2,
        PI,TWO_PI);
    
    //draw the base
    fill(50);
    arc(
        flyingSaucer.x,
        flyingSaucer.y,
        flyingSaucer.width,
        flyingSaucer.height * flyingSaucer.base_height,
        0,PI);
    
    //draw the lights
    var incr = (flyingSaucer.width/(flyingSaucer.num_lights -1)); 
    
    for(var i = 0; i < flyingSaucer.num_lights; i++)
    {
        
        var x = flyingSaucer.x - flyingSaucer.width/2 + i * incr;
        fill(flyingSaucer.brightnesses[i]);
        ellipse(
            x,
            flyingSaucer.y,
            5,
            5
        )
        flyingSaucer.brightnesses[i] += 5;
        if(flyingSaucer.brightnesses[i] > 255)
        {
            flyingSaucer.brightnesses[i] = 100;
        }
    }
    
    
    flyingSaucer.x += random(-1,1);
    flyingSaucer.y += random(-1,1);
    
    
}