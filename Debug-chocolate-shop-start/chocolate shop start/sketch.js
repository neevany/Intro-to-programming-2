var shopStock;
var basket;

//This literal will be used to build the objects in the sketch
var lines = [{
		name: "Chocolate Hurricane",
		imageFile: "assets/bar1.png",
		weight: 240,
		price: 1.20,
		quantity: 12
	},
	{
		name: "Chewy Mallow Fudge",
		imageFile: "assets/bar2.png",
		weight: 240,
		price: 0.90,
		quantity: 23
	},
	{
		name: "Hazelnut Dream",
		imageFile: "assets/bar3.png",
		weight: 240,
		price: 1.60,
		quantity: 18
	},
	{
		name: "Peppermint Swirl",
		imageFile: "assets/bar4.png",
		weight: 240,
		price: 1.50,
		quantity: 6
	}
];

function setup() {
	createCanvas(800, 600);

	//add our chocolate Stock to the shopStock object
	shopStock = new Stock();
    
    var display = {
			x: 30,
			y: 50,
			width: 150,
			height: 400,
		};
    
	for (var i = 0; i < lines.length i++) {
		var l = lines[i]

		shopStock.addStock(l.name, l.imageFile, l.weight, l.price, l.quantity,
			display);
		display.x += display.width + 30;
	}

	//create a basket
	basket = new Basket();

}



function draw() {
	background(249, 207, 214);

	//draw the chocolate bars if there is stock
	for (var i = 0; i < shopStock.stockLines(); i++) {
		if (shopStock.getStockLevel(i) > 0) {
			shopStock.getLine(i).chocolateBar.draw();
		} else {
			//if there is no stock draw a helpful message
			//firstly we need the display object from the chocolate bar to get
			//the coordinates
			var display = shopStock.getLine(i).chocolateBar.display;
			fill(200);
			rect(display.x, display.y, display.width, display.height);
			fill(0);
			text("Out of Stock", display.x + display.width / 2,
				display.y + display.height / 2);
		}
	}
	//display the basket total
	push();
	fill(0);
	textSize(50);
	text("Basket total: £" + basket.basketTotal(), width / 2, height - 50);
	pop();
}

//check for mouse clicks
function mousePressed() {
	//call the check click function in the stock object
	var clickedBar = this.shopStock.checkClick(mouseX, mouseY);
	//if a chocolate bar is returned there is stock and we can add it to the basket
	if (clickedBar != null && shopStock.reduceStock(clickedBar)) {
		basket.addItem(clickedBar);
		console.log(basket);
	}
}

function Stock() {
	//an array to hold the stock
	this.stock;

	//add a chocolate bar to the array each item has a chocolate bar object and a
	//quantity
	this.addStock = function(name, imageFile, weight, price, quantity, display) {
		this.stock.push({
			chocolateBar: new ChocolateBar(name, imageFile, weight, price, display),
			quantity: quantity
		});
	}

	//get the number of lines of chocolate bars
	this.stockLines = function() {
		return this.stock.length;
	}

	//return a particular chocolate bar and stock level from the array by index
	this.getLine = function(i) {
		return this.stock[i];
	}

	//check if any of the bars have been clicked. If a bar has been clicked
	//return its corresponding chocolateBar object
	this.checkClick = function(x, y) {
		for (var i = 0; i < this.stock.length; i++) {
			if (this.stock[i].chocolateBar.wasClicked(x, y)) {
				return this.stock[i].chocolateBar;
			}
		}
		return null;
	}

	//if a bar is in stock and its added to the basket reduce the stock quantity and
	//return true otherwise return false.
	this.reduceStock = function(chocolateBar) {
		for (var i = 0; i < this.stock.length; i++) {
			if (this.stock[i].chocolateBar.name == chocolateBar.name) {
				if (this.stock[i].quantity > 0) {
					this.stock[i].quantity--;
					return true;
				} else {
					return false;
				}
			}
		}
	}

	//return the level of stock available
	this.getStockLevel = function(i) {
		return this.stock[i].quantity;
	}
}

//An object to store the chocolate bars. the name and imageFile are strings
//weight and price are numbers and display is an object storing x,y,width and height
//properties

function ChocolateBar(name, imageFile, weight, price, display) {
	this.name = name;
	//load image from file path
	this.image = loadImage(imageFile);
	this.weight = weight;

	this.price = price;
	this.display = display

	//draw the chocolate bars image to the values set in the display object
	//also display the price and price per 100grams
	this.draw = function() {
		image(image, this.display.x, this.display.y, this.display.width,
			this.display.height);
		var pricePer100g = price / weight * 100;
		var priceString = "£" + price + "p ( £" + pricePer100g +
			"p per 100 grams)";
		textAlign(CENTER);
		fill(0);
		text(priceString, this.display.x + this.display.width / 2,
			this.display.y + this.display.height + 30);
	}

	//was the chocolate bar clicked. If so return true false otherwise
	this.wasClicked = function(x, y) {
		if (x > this.display.x && x < this.display.x + this.display.width &&
			y > this.display.y && y < this.display.y + this.display.height) {
			return true;
		}

		return false;
	}

}

function Basket() {
	this.items = [];

	this.addItem = function(chocolateBar) {
		//is the bar already in items, if it is add one to quantity
		for (var i = 0; i < this.items.length; i++) {
			if (this.items[i].chocolateBar.name == chocolateBar.name) {
				this.items[i].quantity++;
				return;
			}
		}
		this.items.push({
			chocolateBar: chocolateBar,
			quantity: 1
		});
	}

	this.basketTotal = function() {
		var total = 0.0;
		for (var i = 0; i < this.items.length; i++) {
			total += this.items[i].chocolateBar.price * this.items[i].quantity;
		}
		return total.toFixed(2);
	}
}