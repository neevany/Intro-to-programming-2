//Topic 1.1 
//Object orientation revisted
//part one

function setup()
{
    createCanvas(800,600);
    noStroke();
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
    //draw the flying saucer
    fill(175,238,238);
    arc(200,100,75,100,PI,TWO_PI)
    fill(150);
    arc(200,100,150,50,PI,TWO_PI);
    fill(50);
    arc(200,100,150,25,0,PI);
    
}