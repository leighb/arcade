var input = function()
{
	//key press event listeners
	window.addEventListener( "keydown", onKeyDown, true );
	window.addEventListener("keyup", onKeyUp, true);

	function onKeyDown(e)
	{
		var k = e.keyCode;
		if (k == 37)
			keyLeft = true;
		else if (k == 39)
			keyRight = true;

		if (k == 38)
			keyUp = true;
		else if (k == 40)
			keyDown = true;
	};

	function onKeyUp(e)
	{
		var k = e.keyCode;
		if (k == 37) {
			keyLeft = false;				
		} else if (k == 39) {
			keyRight = false;
		}
		if (k == 38) {
			keyUp = false;
		} else if (k == 40) {
			keyDown = false;
		}
	};
};