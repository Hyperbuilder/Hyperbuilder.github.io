

let bubbles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}


function mouseDragged() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}
function draw() {
  background(random(0, 255), random(0, 255), random(0, 255));

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }

  textAlign(CENTER);
  fill(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  textSize(random(70, 80));
  textStyle(BOLD)
  text("DO DRUGS LEAVE SCHOOL", window.innerWidth / random(1.5, 2.5), window.innerHeight / random(1.5, 2.5));

}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() { 
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(random(0, 255), random(0, 255),random(0, 255), random(0, 100));
    strokeWeight(20);
    fill(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
    ellipse(this.x, this.y, this.r * 2);
  }


}
