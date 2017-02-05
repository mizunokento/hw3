function setup() {
  createCanvas(400, 400);

  var i = 10;
     var ellipseR = i;
  var ellipseX = 200;
  


var ellipseY = 200;
     noFill();


     while (i<=400){
  ellipse(ellipseX, ellipseY, i, i);
     i=i+10;
     }
}
