//////////////////////////
// FABRIC JS PRACTICE
//////////////////////////

var canvas = new fabric.Canvas('canvas');

//////////////////////////
// simple rectangle
//////////////////////////
var rect = new fabric.Rect({
      top : 100,
      left : 100,
      width : 60,
      height : 100,
      fill : 'red'
});

canvas.add(rect);


//////////////////////////
// Image from a url
//////////////////////////

//////////////////////////
// Button add to canvas
//////////////////////////
$('.add-rectangle').click(function() {
fabric.Image.fromURL('http://th04.deviantart.net/fs31/PRE/i/2008/200/c/2/ScrappinCop_Big_Ole_Googly_Eye_by_debh945.png', function(image) {
      image.scale(0.1);
      canvas.add(image);
});

})

fabric.Image.fromURL('http://th04.deviantart.net/fs31/PRE/i/2008/200/c/2/ScrappinCop_Big_Ole_Googly_Eye_by_debh945.png', function(image) {
      image.scale(0.1);
      canvas.add(image);
});

//////////////////////////
// Path and path group
//////////////////////////

var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
path.set({ left: 120, top: 120 });
canvas.add(path);


//////////////////////////
// Image filter
//////////////////////////

fabric.Image.fromURL('http://theironyard.com/images/education/academy/front-end-2/graduates/joe-tamburro.jpg', function(img) {
  // img.filters.push(new fabric.Image.filters.Sepia());
  // img.applyFilters(canvas.renderAll.bind(canvas));
      img.scale(0.5);
  canvas.add(img);
});

fabric.Image.fromURL('images/pug.jpg', function(img) {
  img.filters.push(new fabric.Image.filters.Sepia());
  img.applyFilters(canvas.renderAll.bind(canvas));
  canvas.add(img);
});
