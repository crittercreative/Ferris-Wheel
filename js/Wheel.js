(function() {
	var Wheel = function( radius, offset )
	{
		this.init( radius, offset );
	}
	var p = Wheel.prototype;

	p.radius 	= 200;
	p.offset 	= -150;
	p.cy 		= 0;
	p.cz 		= 200; // should match the radius to make the frontmost item 100% scale

	// fake 3d
	p.fl 		= 250;
	p.vpx 		= 275;
	p.vpy 		= 200;

	// items
	p.numItems	= 10;
	p.items 	= [];

	// movement
	p.speed 	= 2;


	p.init = function( radius, offset )
	{
		if ( radius ) this.radius = radius;
		if ( offset ) this.offset = offset;

		for ( var i = 0; i < this.numItems; i++ )
		{
			var item = new Item( this.vpx, this.vpy, this.cy, this.cz, this.offset, this.fl, this.radius );
			item.angle = i * ( ( Math.PI * 2 ) / this.numItems );
			item.updateItem();
			this.items[i] = item;
		}
	}

	p.update = function()
	{
		for ( var i = 0; i < this.numItems; i++ )
		{
			var item = this.items[i];
			item.angle -= this.speed * .01745;
			item.updateItem();
		}
		// should only sort when it has to.
		//this.sortZ();
	}

	p.sortZ = function()
	{
		//items.sortOn( "zPos", Array.DESCENDING | Array.NUMERIC );
	
		for ( var i = 0; i < this.numItems; i++ )
		{
		//	setChildIndex( items[i], i );
		}
	}

window.Wheel = Wheel;
}());