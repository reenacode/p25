class paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'isStatic':false,
          'density':1.0
      }
      this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
      pop();
    }
  };
  