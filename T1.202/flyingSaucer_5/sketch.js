//Topic 1.1 
//Object orientation revisted
//part two

var flyingSaucers;

function FlyingSaucer(x,y)
{
    this.x = x;
    this.y = y;
    this.width = random(150,250);
    this.height = random(75,125);
    this.window_width = random(0.65,0.85),
    this.window_height = random(0.75,1),
    this.base_height = random(0.25,0.5),
    this.num_lights = floor(random(5,25)),
    this.light_inc = floor(random(5,10)),
    this.brightnesses = [],
    this.beamOn = false,

    this.beam = function()
    {
        if(random() > 0.25)
        {
            fill(255,255,100,150);
            beginShape();
            vertex(this.x - 25,this.y + this.height * this.base_height * 0.5);
            vertex(this.x + 25,this.y + this.height * this.base_height * 0.5);
            vertex(this.x + 70,height - 100);
            vertex(this.x - 70,height - 100);
            endShape();
        }
    },

    this.hover = function()
    {
        this.x += random(-1,1);
        this.y += random(-1,1);   
        
        if(this.beamOn && random() > 0.996)
        {
            this.beamOn = false;
        }
        else if(!this.beamOn && random() > 0.99)
        {
            this.beamOn = true;
        }
    }
    
    this.draw = function()
    {
        if(this.beamOn)
        {
            this.beam();
        }
    
        //draw the window
        fill(175,238,238);
        arc(
            this.x,
            this.y,
            this.width * this.window_width,
            this.height * this.window_height,
            PI,TWO_PI);

        //draw the body
        fill(150);
        arc(
            this.x,
            this.y,
            this.width,
            this.height/2,
            PI,TWO_PI);

        //draw the base
        fill(50);
        arc(
            this.x,
            this.y,
            this.width,
            this.height * this.base_height,
            0,PI);

        //draw the lights
        var incr = (this.width/(this.num_lights -1)); 

        for(var i = 0; i < this.num_lights; i++)
        {

            var x = this.x - this.width/2 + i * incr;
            fill(this.brightnesses[i]);
            ellipse(
                x,
                this.y,
                5,
                5
            )
            this.brightnesses[i] += this.light_inc;
            if(this.brightnesses[i] > 255)
            {
                this.brightnesses[i] = 100;
            }
        }
    }
    
    
    //////// setup code /////////
    
    for(var i = 0; i < this.num_lights; i++)
    {
        this.brightnesses.push((i * this.light_inc * 2)%255);
    }
}



function setup()
{
    createCanvas(800,600);
    noStroke();
    
    flyingSaucers = [];
    
    for(var i = 0; i < 5; i++)
    {
        flyingSaucers.push(new FlyingSaucer(100 + i * 150, floor(random(100,200))));
    }
    


}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
    
    for(var i = 0; i < flyingSaucers.length; i++)
    {
        flyingSaucers[i].hover();
    
        //draw the flying saucer
        flyingSaucers[i].draw();
    }
    


}
