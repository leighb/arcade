var particles = function(particleCount)
{
	this.particleArray = [];

	for(var i = 0; i < particleCount; i++) 
	{
		this.particleArray.push(new particle());
	}	

};

particles.prototype.draw = function(ctx) {
	ctx.globalCompositeOperation ="lighter";
		
	//draw particles
	for(var i=0;i<this.particleArray.length; i++)
	{
		var p = this.particleArray[i];
		p.opacity = Math.round(p.remaining_life/p.life*100)/100;

		ctx.fillStyle = "rgba("+p.r+","+p.g+","+p.b+","+p.opacity+")";
		ctx.fillRect(p.x, p.y, p.radius, p.radius);
		ctx.fill();

		// move the particles
		p.remaining_life--;
		p.radius--;
		p.x += p.vx;
		p.y -= p.vy;

		// regenerate particles
		if(p.remaining_life < 0)
		{
			//create new particle to replace old one
			this.particleArray[i] = new particle();
		}	
	}
	
};

particles.prototype.move = function() {
	
};