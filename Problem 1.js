function setup() {
  createCanvas(400, 400);

  for (var i = 1; i < width/9; i++) {
    line(200, 0, i*9, 400);
  }
}
