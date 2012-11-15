(function() {
	var Item = function( vpx, vpy, cy, cz, offset, fl, radius )
	{
		this.init( vpx, vpy, cy, cz, offset, fl, radius );
	}
	var p = Item.prototype;

	p.xPos = 0;
	p.yPos = 0;
	p.zPos = 0;
	p.scale = 1;
	p.scaleX = 1;
	p.scaleY = 1;
	p.angle = 0;

	p.dom = null;
		
	p.vpx;
	p.vpy;
	p.cy;
	p.cz;
	p.offset;
	p.fl;
	p.radius;


	p.init = function( vpx, vpy, cy, cz, offset, fl, radius )
	{
		this.vpx = vpx;
		this.vpy = vpy;
		this.cy = cy;
		this.cz = cz;
		this.offset = offset;
		this.radius = radius;
		this.fl = fl;

		this.dom = document.createElement('div');
		this.dom.style.position = 'absolute';
		this.dom.style.backgroundColor = 'red';
		document.body.appendChild( this.dom );
	}

	p.updateItem = function()
	{
		this.xPos = this.offset;
		this.yPos = this.cy + Math.sin( this.angle ) * this.radius;
		this.zPos = this.cz + Math.cos( this.angle ) * this.radius;
		
		this.scale = Math.floor( 10000 *  this.fl / ( this.fl + this.zPos ) ) / 10000; 
		
		this.scaleX = this.scaleY = this.scale;
		
		this.x = this.vpx + ( this.xPos * this.scale );
		this.y = this.vpy + ( this.yPos * this.scale );
		
		
		// styles
		this.dom.style.left = this.x + 'px';
		this.dom.style.top  = this.y + 'px';

		this.dom.style.width  = (this.scaleX * 100) + 'px';
		this.dom.style.height = (this.scaleY * 100) + 'px';

		this.dom.style.opacity = this.scale + .25;
	}

window.Item = Item;
}());