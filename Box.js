class Box {
  constructor(x, y) {
    var options = {
   restitution: 0.9,
   density:0.04,
   friction: 1.0

    };
    this.body = Bodies.rectangle(x, y, 70, 70, options);
    this.width = 70;
    this.height = 70;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
  
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('white')
    fill('orange')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};

