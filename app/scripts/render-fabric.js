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
// Button add to canvas
//////////////////////////
$('.add-rectangle').click(function() {
      var rect = new fabric.Rect({ width: 10, height: 20, fill: '#f55', opacity: 0.7 });
      canvas.add(rect);

      console.log(rect);
})

//////////////////////////
// Image from a url
//////////////////////////

fabric.Image.fromURL('http://th04.deviantart.net/fs31/PRE/i/2008/200/c/2/ScrappinCop_Big_Ole_Googly_Eye_by_debh945.png', function(oImg) {
  oImg.scale(0.1);
  canvas.add(oImg);
});

//////////////////////////
// Path and path group
//////////////////////////

var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
path.set({ left: 120, top: 120 });
canvas.add(path);

