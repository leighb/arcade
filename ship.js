var ship = function(shipRotation,shipXScale)	{
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	this.speed = 0.5;
	this.vx = 0;
	this.vy = 0;
	this.friction = 0.93;
	this.width = 60;
	this.height = 60;
	this.maxSpeed = 8;
	this.img = new Image();
	this.img.src = 'ship.png';
	this.angle = shipRotation;
	this.xScale = shipXScale;
};

ship.prototype.draw = function(ctx) {
	ctx.globalCompositeOperation = "source-over";
	ctx.save();
	ctx.translate(this.x, this.y);
	ctx.rotate(this.convertToRadians(this.angle));
	ctx.translate( -this.width/2, -this.height/2);
	ctx.drawImage(this.img,0,0, this.width * this.xScale, this.height);
	ctx.restore();
};

ship.prototype.move = function() {
	//handle keypresses
  if (keyUp) 
  	this.vy -= this.speed;
  else if (keyDown) 
		this.vy += this.speed;
  else 
  	this.vy *= this.friction; 

  if (keyLeft) 
    this.vx -= this.speed;
  else if (keyRight) 
    this.vx += this.speed;
  else 
  	this.vx *= this.friction;		 

  //update location
  this.x += this.vx;
  this.y += this.vy;

  //limit speed
  if (this.vx > this.maxSpeed)
    this.vx = this.maxSpeed;
  else if (this.vx < -this.maxSpeed)
    this.vx = -this.maxSpeed;

  if (this.vy > this.maxSpeed)
    this.vy = this.maxSpeed;
  else if (this.vy < -this.maxSpeed)
    this.vy = -this.maxSpeed;

  //set appearance variables
  this.angle = this.vx;
  this.xScale = (this.maxSpeed - Math.abs(this.vx))/(this.maxSpeed*4)+0.75;

  //limit movement within the canvas
  if (this.x > canvas.width) {
    this.x = canvas.width;
    this.vx = -this.vx;
  } else if (this.x < 0) {
    this.x = 0;
    this.vx = -this.vx;
  }

  if (this.y > canvas.height) {
    this.y = canvas.height;
    this.vy = -this.vy;
  } else if (this.y < 0) {
    this.y = 0;
    this.vy = -this.vy;
  }

  starSpeedQuotient = this.vy;

};

ship.prototype.convertToRadians = function(degree) {
  return degree*(Math.PI/180);
}
