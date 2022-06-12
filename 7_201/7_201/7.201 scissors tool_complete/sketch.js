
var canvas;
var selectMode;
var selectedArea;

var selectButton;
var selectedPixels;


function setup()
{
	canvas = createCanvas(800, 800);
	background(200);
	noFill();
    stroke(0);
	
	selectMode = 0;
	selectedArea = {x: 0, y:0, w: 100, h: 100};
    
	selectButton = createButton('select area');
    
    selectButton.mousePressed(function()
    {
        //event code will go here
		
		console.log("button pressed");
		
		if(selectMode == 0)
		{
			selectMode += 1;
			selectButton.html("cut");

			loadPixels(); // store current frame
		}
		else if(selectMode == 1)
		{
			selectMode += 1;
			selectButton.html("end paste");
			
			//refresh the screen
			updatePixels();
		
			//store the pixels
			selectedPixels = get(selectedArea.x , selectedArea.y , selectedArea.w, selectedArea.h);
			
			//draw a rectangle over it
			fill(255);
			noStroke();
			rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
		}
		else if(selectMode == 2)
		{
			selectMode = 0;
			loadPixels();
			selectedArea = {x: 0, y: 0, w: 100, h:100};
			selectButton.html("select area");
		}
    });

}


function draw() 
{

    //you might recognise this code

    if(mouseIsPressed)
    {
        
		
		if(selectMode == 0)
		{
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1)
			{
				console.log("update mouse")
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else
			{
				stroke(0);
				noFill();
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		else if (selectMode == 1)
		{
			updatePixels();
			
			noStroke();
			fill(255,0,0,100);
			rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
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
		selectedArea.x = mouseX;
		selectedArea.y = mouseY;
	}
	else if(selectMode == 2)
	{
		image(selectedPixels, mouseX, mouseY);
	}
	
	
}


function mouseDragged()
{
	if(selectMode == 1)
	{
		var w = mouseX - selectedArea.x;
		var h = mouseY - selectedArea.y;

		selectedArea.w = w;
		selectedArea.h = h;

		console.log(selectedArea);
	}
	

}