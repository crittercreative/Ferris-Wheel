﻿package{	import flash.display.MovieClip;	public class Wheel extends MovieClip	{		// circle vars		private var radius:int 		= 200;		private var offset:int 		= -150;		private var cy:int 			= 0;		private var cz:int 			= 200;// should match the radius to make the frontmost item 100% scale		// fake 3d		private var fl:int 			= 250;		private var vpx:int 		= 275;		private var vpy:int 		= 200;		// items		private var numItems:int 	= 10;		private var items:Array 	= [];		// movement		private var speed:Number 	= 2;				public function Wheel( radius:int = 200, offset:int = 0 )		{			this.offset = offset;			this.radius = radius;						for ( var i:int = 0; i < numItems; i++ )			{				var item:Item = new Item( vpx, vpy, cy, cz, offset, fl, radius );				item.angle = i * ( ( Math.PI * 2 ) / numItems );				item.updateItem();				addChild( item );				items[i] = item;			}		}		/**		 * Update the whole carousel		 */		public function update():void		{			for ( var i:int = 0; i < numItems; i++ )			{				var item:Item = items[i];				item.angle -= speed * .01745;				item.updateItem();			}			// should only sort when it has to.			sortZ();		}		/**		 * swaps depths based on the z position.		 */		private function sortZ():void		{			items.sortOn( "zPos", Array.DESCENDING | Array.NUMERIC );					for ( var i:uint = 0; i < numItems; i++ )			{				setChildIndex( items[i], i );			}		}	}}