'use strict';

//////////////////////////
// FABRIC JS PRACTICE
//////////////////////////

var canvas = new fabric.Canvas('canvas');

canvas.on('mouse:down', function(options) {
      console.log(options.e.clientX, options.e.clientY);
      if (options.target) {
            console.log('an object was clicked! ', options.target.type);
      }
});

/*canvas.on('mouse:move', function(options){
      console.log(options.e.clientX, options.e.clientY);
})*/
//////////////////////////
// simple rectangle
//////////////////////////
/*var rect = new fabric.Rect({
      top : 100,
      left : 100,
      width : 60,
      height : 100,
      fill : 'red'
});

canvas.add(rect);*/


//////////////////////////
// Button add to canvas
//////////////////////////
$('.add-rectangle').click(function() {
      fabric.Image.fromURL('http://th04.deviantart.net/fs31/PRE/i/2008/200/c/2/ScrappinCop_Big_Ole_Googly_Eye_by_debh945.png', function(image) {
            image.scale(0.1);
            canvas.add(image);
      });
})

// Initial Googly Eye loader
/*
fabric.Image.fromURL('http://th04.deviantart.net/fs31/PRE/i/2008/200/c/2/ScrappinCop_Big_Ole_Googly_Eye_by_debh945.png', function(image) {
      image.scale(0.1);
      canvas.add(image);
});*/

//////////////////////////
// Path and path group
//////////////////////////

// Simple triangle path - You can create a path by hand BUT use the built in Fabric parser
/*var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
path.set({ left: 120, top: 120 });
canvas.add(path);*/

//////////////////////////
// Image filter
//////////////////////////

fabric.Image.fromURL('http://theironyard.com/images/education/academy/front-end-2/graduates/joe-tamburro.jpg', function(img) {
      canvas.add(img);
      img.left = 400;
});

/*fabric.Image.fromURL('images/pug.jpg', function(img) {
      img.filters.push(new fabric.Image.filters.Sepia());
      img.applyFilters(canvas.renderAll.bind(canvas));
      img.top = 400;
      canvas.add(img);
});*/

fabric.Image.fromURL('http://1.media.dorkly.cvcdn.com/57/82/014c67406a541837b841a9b7ac6cfed9-corgi-link-cosplay.jpg', function(img) {
      img.scale(0.5);

      //img.filters.push(new fabric.Image.filters.Sepia());
      
      // applyFilters produces  Failed to execute 'getImageData' on 'CanvasRenderingContext2D': The canvas has been tainted by cross-origin data.
      // img.applyFilters(canvas.renderAll.bind(canvas));
      canvas.add(img);
});

//////////////////////////
// Gradient filter
//////////////////////////

/*var circle = new fabric.Circle({
  left: 300,
  top: 300,
  radius: 80
});

circle.setGradient('fill', {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: circle.height / 2,
  colorStops: {
    0: "F08",
    1: "blue"
  }
});

canvas.add(circle);*/

//////////////////////////
// Fabric Text Button
//////////////////////////

$('.submit-text').click(function(){
      var fabricText = $('.text-canvas').val();
      var canvasText = new fabric.Text(fabricText, {
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: 40,
            textBackgroundColor: 'F08'
      });
      canvas.add(canvasText);
      $('.text-canvas').val('');
})

//////////////////////////
// Group
//////////////////////////

/*var group = new fabric.Group([ rect, circle ], {
  left: 150,
  top: 100,
  angle: -10
});

canvas.add(group);*/
