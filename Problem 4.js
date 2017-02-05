function setup() {
  createCanvas(400, 400);

var i=10;
var x=0;
while(x<=400){
line(x,0,x,i);
x=x+5;
i=i+10;
}
}
