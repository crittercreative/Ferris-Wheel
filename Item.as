﻿package{	import flash.display.MovieClip;	import flash.filters.BlurFilter;	public class Item extends MovieClip	{		public var xPos:Number = 0;		public var yPos:Number = 0;		public var zPos:Number = 0;		public var scale:Number = 1;		public var angle:Number = 0;				private var blur:BlurFilter = new BlurFilter( 0, 0, 2 );				private var vpx:int;		private var vpy:int;		private var cy:int;		private var cz:int;		private var offset:int;		private var fl:int;		private var radius:int;				public function Item( vpx:int, vpy:int, cy:int, cz:int, offset:int, fl:int, radius:int )		{			this.vpx = vpx;			this.vpy = vpy;			this.cy = cy;			this.cz = cz;			this.offset = offset;			this.radius = radius;			this.fl = fl;		}				/**		 * Position items in psuedo 3d space, moves, and applies depth of field.		 */		public function updateItem():void		{			xPos = offset;			yPos = cy + Math.sin( angle ) * radius;			zPos = cz + Math.cos( angle ) * radius;						scale = int( 10000 *  fl / ( fl + zPos ) ) / 10000; 						scaleX = scaleY = scale;						x = vpx + ( xPos * scale );			y = vpy + ( yPos * scale );						blur.blurX = blur.blurY = int( 8 - ( scale * 8 ) - 1 );			filters = [ blur ];		}			}}