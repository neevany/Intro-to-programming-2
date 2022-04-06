/*
Hack it: Zombie Attack

The program creates a horde of zombies that cross the canvas. Read the code
and make the following enhancements

1. Split the code up into muliple files one for each constructor
2. Give each zombie a health property
3. Add a shovel! When the zombie is clicked on the head their health decreases
	* Add a 'clicked' method to the zombie to check if x and y coordinates, taken as arguments
	 are over the zombies head (you can use the dist function) and decrease health
	* In the horde constructor create a new method to check each zombies clicked method
	* also remove from the array any zombies whoes health is below 0.
	* call the method in horde from mousePressed();
4. When a zombie is killed make sure a new zombie is added to the horde.
5. Extension: Make it a game where the idea is to keep the zombies from the right of the screen
for as long as possible.
*/

//variable to store the zombie horde
var horde;

function setup() {
	createCanvas(800, 600);

	//create a new horde and add zombies
	horde = new Horde();
	horde.addZombies(7);

}

function draw() {
	background(77, 112, 107);
	this.horde.drawZombies();

}

//Constructor for the horde
function Horde() {
	//an array of zombies
	this.zombies = [];

	//call each zombies drawing code and update it's location ready to be drawn again
	this.drawZombies = function() {
		for (var i = 0; i < this.zombies.length; i++) {
			this.zombies[i].draw();
			this.zombies[i].updateLocation();
		}
	}

	//add n zombies to the horde
	this.addZombies = function(n) {
		for (var i = 0; i < n; i++) {
			this.zombies.push(new zombie(random(20, height - 50)))
		}
	}
}

//constructor for the Zombies
function zombie(y) {
	//initial x so all zombies start to the left of the screen
	this.x = -10;
	this.y = y;
	//set a random speed
	this.speed = random(0.2, 0.5);

	//draw the zombie to the screen
	this.draw = function() {
		push();
		//arms
		fill(128, 0, 128);
		rect(this.x - 10, this.y - 50, 65, 15);
		rect(this.x - 10, this.y + 35, 65, 15);
		//shoulders
		rect(this.x - 20, this.y - 50, 35, 100, 10);
		//head
		fill(50);
		ellipse(this.x, this.y, 50);
		pop();
	}

	//update the zombies x location as it lumbers across the screen
	this.updateLocation = function() {
		this.x += this.speed;
	}
}