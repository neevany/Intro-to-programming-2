
var canvas;

var selectButton;

function setup()
{
	canvas = createCanvas(800, 800);
	background(200);
	noFill();
    stroke(0);
    
	selectButton = createButton('Select area');
    
    selectButton.mousePressed(function()
    {
        //event code will go here    
    });

}


function draw() 
{

    //you might recognise this code

    if(mouseIsPressed)
    {
        
        //check if they previousX and Y are -1. set them to the current
        //mouse X and Y if they are.
        if (previousMouseX == -1)
        {
            previousMouseX = mouseX;
            previousMouseY = mouseY;
        }
        //if we already have values for previousX and Y we can draw a line from 
        //there to the current mouse location
        else
        {
            line(previousMouseX, previousMouseY, mouseX, mouseY);
            previousMouseX = mouseX;
            previousMouseY = mouseY;
        }
    }
    else
    {
        //if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
        previousMouseX = -1;
        previousMouseY = -1;
    }
    
}

function keyPressed()
{
    
}