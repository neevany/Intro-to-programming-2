//Topic 1.1 
//Object orientation revisted
//part one

var flying_saucers;

function setup()
{
    createCanvas(1200,600);
    noStroke();
    
    flying_saucers = [];
    for(var i = 0; i < 5; i++)
    {
        flying_saucers.push(new Flying_saucer(100 + i * 250, 100));
    }
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);

    for(var i = 0; i < flying_saucers.length; i++)
    {
        //draw the flying saucer
        if(flying_saucers[i].beam_on)
        {
            flying_saucers[i].beam();
        }

        flying_saucers[i].hover();
        
        flying_saucers[i].draw();
    }
}

function keyPressed()
{
    flying_saucer.beam_on = true;
}

function keyReleased()
{
    flying_saucer.beam_on = false;
}


function Flying_saucer(x, y)
{
    this.x = x;
    this.y = y;
    this.width = random(100, 250);
    this.height = random(50, 80);
    this.window_width = random(0.5, 0.85);
    this.window_height = 0.85;
    this.base_height = 0.45;
    this.num_lights = round(random(10, 20));
    this.brightnesses = [];
    this.beam_on = false;

    this.hover = function()
    {
        this.x += random(-2, 2);
        this.y += random(-1, 1);

        if(this.beam_on == false && random() > 0.98)
        {
            this.beam_on = true;
        }
        else if(this.beam_on == true && random() > 0.96)
        {
            this.beam_on = false;
        }
    };

    this.beam = function()
    {
        fill(255, 255, 100, 150);
        if(random() > 0.1)
        {
            beginShape();
            vertex(this.x - this.width * 0.25, this.y);
            vertex(this.x + this.width * 0.25, this.y);
            vertex(this.x + this.width * 0.35, height - 100);
            vertex(this.x - this.width * 0.35, height - 100);
            endShape(CLOSE);
        }
    };

    this.draw = function()
    {
        //draw the flying saucer
    //draw the window
    fill(175,238,238);
    arc(this.x, 
        this.y, 
        this.width/2,
        this.height * 2,
        PI,
        TWO_PI);
    //draw the body
    fill(150);
    arc(this.x,
        this.y, 
        this.width,
        this.height,
        PI,
        TWO_PI);
    //draw the base
    fill(50);
    arc(this.x,
        this.y,
        this.width,
        this.height/2,
        0,
        PI);

    //draw the lights
    var incr = this.width/(this.num_lights - 1);
    for(var i = 0; i < this.num_lights; i++)
    {
        fill(this.brightnesses[i]);
        ellipse(this.x - this.width/2 + incr * i, this.y, 5);
    
        this.brightnesses[i] += 2;
        if(this.brightnesses[i] > 255)
        {
            this.brightnesses[i] = 100;
        }
    }
    };
    for(var i = 0; i < this.num_lights; i++)
    {
        this.brightnesses.push((i * 10)%255);
    }
}

