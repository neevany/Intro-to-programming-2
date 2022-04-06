function Particle(x, y, xSpeed, ySpeed, size, colour)
{
	this.x = x;
	this.y = y;
	this.size = size;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.colour = colour;
	this.age = 0;

	this.draw = function()
	{
		fill(this.colour)
		ellipse(this.x, this.y, this.size);
	}

	this.update = function()
	{
		//update location
		this.x += this.xSpeed;
		this.y += this.ySpeed;

		//increment the age
		this.age++;
	}
}