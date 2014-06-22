//////////////////
// toJSON results
//////////////////
/*fabric.Canvas#toObject. toObject returns the same representation as toJSON, 
in a form of actual object, without string serialization.  canvas.toObject()*/


//////////  var jsonString = JSON.stringify(canvas); produced below //////////////

{
	'objects':[ 
		// first object added to the canvas was text
		{ 
			'type':'text',
			'originX':'left',
			'originY':'top',
			'left':228,
			'top':192,
			'width':185,
			'height':52,
			'fill':'rgb(0,0,0)',
			'stroke':null,
			'strokeWidth':1,
			'strokeDashArray':null,
			'strokeLineCap':'butt',
			'strokeLineJoin':'miter',
			'strokeMiterLimit':10,
			'scaleX':1,
			'scaleY':1,
			'angle':0,
			'flipX':false,
			'flipY':false,
			'opacity':1,
			'shadow':null,
			'visible':true,
			'clipTo':null,
			'backgroundColor':',
			'text':'some text',
			'fontSize':40,
			'fontWeight':'bold',
			'fontFamily':'Arial',
			'fontStyle':',
			'lineHeight':1.3,
			'textDecoration':',
			'textAlign':'left',
			'path':null,
			'textBackgroundColor':'F08',
			'useNative':true
		},
		// second object added to the canvas was image
		{
			'type':'image',
			'originX':'left',
			'originY':'top',
			'left':139,
			'top':62,
			'width':895,
			'height':893,
			'fill':'rgb(0,0,0)',
			'stroke':null,
			'strokeWidth':1,
			'strokeDashArray':null,
			'strokeLineCap':'butt',
			'strokeLineJoin':'miter',
			'strokeMiterLimit':10,
			'scaleX':0.1,
			'scaleY':0.1,
			'angle':0,
			'flipX':false,
			'flipY':false,
			'opacity':1,
			'shadow':null,
			'visible':true,
			'clipTo':null,
			'backgroundColor':',
			'src':'http://th04.deviantart.net/fs31/PRE/i/2008/200/c/2/ScrappinCop_Big_Ole_Googly_Eye_by_debh945.png',
			'filters':[],
			'crossOrigin':'
		},
		// third object added to the canvas was image

		{
			'type':'image',
			'originX':'left',
			'originY':'top',
			'left':373,
			'top':40,
			'width':895,
			'height':893,
			'fill':'rgb(0,0,0)',
			'stroke':null,
			'strokeWidth':1,
			'strokeDashArray':null,
			'strokeLineCap':'butt',
			'strokeLineJoin':'miter',
			'strokeMiterLimit':10,
			'scaleX':0.1,
			'scaleY':0.1,
			'angle':0,
			'flipX':false,
			'flipY':false,
			'opacity':1,
			'shadow':null,
			'visible':true,
			'clipTo':null,
			'backgroundColor':',
			'src':'http://th04.deviantart.net/fs31/PRE/i/2008/200/c/2/ScrappinCop_Big_Ole_Googly_Eye_by_debh945.png',
			'filters':[],
			'crossOrigin':'
		}
	],
	//// can the image be the background???
	'background':'
} 

//////////////////////////
// NOTES
//////////////////////////
http://stackoverflow.com/questions/5241365/how-to-set-the-background-image-of-a-html-5-canvas-to-png-image

can apply a background to a canvas element through CSS 
and this background will not be considered part the image, 
e.g. when fetching the contents through toDataURL().

