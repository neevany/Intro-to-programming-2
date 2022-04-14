function LineToTool(){
	// Tool is drawing a straight line from the point where mouse was pressed to the point where mouse is released. 
	// While mouse is pressed, the function loads the pixel data and displays a flexible line from the start point to the cursor.
	// Once mouse is released, line is drawn from the start point to the point where mouse was released. 
	
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}

			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
