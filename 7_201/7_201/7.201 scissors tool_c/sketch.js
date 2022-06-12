
var canvas;

var selectButton;
var selectMode;
var selectRect;
var selectImg;

function setup()
{
	canvas = createCanvas(800, 800);
	background(200);
	noFill();
    stroke(0);
    
    selectMode = 0;
	selectButton = createButton('select area');

    selectRect = {x: 0, y: 0, w: 0, h: 0};
    
    selectButton.mousePressed(function()
    {
        //event code will go here    
        
        if(selectMode == 0)
        {
            loadPixels();
            selectButton.html('cut');
            selectMode += 1;
        }
        else if(selectMode == 1)
        {
            updatePixels(); // reload the screen pixels to get rid of the red colour
            //store the pixels in selectImg
            selectImg = get(selectRect.x, selectRect.y, selectRect.w, selectRect.h);
            
            //clear the area
            push();
            noStroke();
            fill(255);
            rect(selectRect.x, selectRect.y, selectRect.w, selectRect.h);
            pop();
            
            selectButton.html('end paste');
            selectMode += 1;
            
        }
        else if(selectMode == 2)
        {
            selectButton.html('select area');
            selectMode = 0;
        }
    });

}


function draw() 
{

    if(selectMode == 1)
    {
        updatePixels(); // reload the screen pixels
        
        //draw the selection rectangle
        push();
        noStroke();
        fill(255,0,0,100);
        rect(selectRect.x, selectRect.y, selectRect.w, selectRect.h);
        pop();
        
    }
    
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

function mousePressed()
{
    if(selectMode == 1)
    {
        selectRect.x = mouseX;
        selectRect.y = mouseY;
    }
    else if(selectMode == 2)
    {
        image(selectImg,mouseX, mouseY);
    }
}


function mouseDragged()
{
    if(selectMode == 1)
    {
        selectRect.w = mouseX - selectRect.x;
        selectRect.h = mouseY - selectRect.y;
    }
}