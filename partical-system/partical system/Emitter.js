function Emmitter(x, y, pSpeedX, pSpeedY, size, colour)
{
	this.x = x;
	this.y = y;
	this.pSpeedX = pSpeedX;
	this.pSpeedY = pSpeedY;
	this.size = size;
	this.colour = colour;
	this.startParticles = 0;
	this.lifetime = 0;

	this.particles = [];


	this.addParticle = function()
	{
		var p = new Particle(this.x, this.y,
			random(this.pSpeedX - 0.5, this.pSpeedX + 0.5),
			random(this.pSpeedY - 0.5, this.pSpeedY + 0.5),
			random(this.size - 10, this.size + 10), this.colour);

		return p;
	}

	this.startEmitter = function(startParticles, lifetime)
	{
		//create initial partciles
		for (var i = 0; i < startParticles; i++)
		{
			this.particles.push(this.addParticle());
		}

		//set additional properties
		this.startParticles = startParticles;
		this.lifetime = lifetime;
	}

	this.drawParticles = function()
	{
		var deadParticles = 0;
		for (var i = this.particles.length - 1; i >= 0; i--)
		{
			this.particles[i].draw();
			this.particles[i].update();

			if (this.particles[i].age > random(0, this.lifetime))
			{
				//remove from the array
				this.particles.splice(i, 1);
				deadParticles++;
			}
		}

		if (deadParticles > 0)
		{
			for (var i = 0; i < deadParticles; i++)
			{
				this.particles.push(this.addParticle());
			}
		}
	}

}