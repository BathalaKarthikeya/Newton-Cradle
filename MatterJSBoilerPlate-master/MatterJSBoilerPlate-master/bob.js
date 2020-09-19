class Bob{
    constructor(x,y,r,angle){
        var options={
            isStatic:false,
            restitution:1.3,
            density:1.2
          }
        this.body =Bodies.circle(x,y,r/2,options,angle);
        this.r = r;
        Matter.Body.setAngle(this.body,angle);

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("red");
        stroke("black");
        strokeWeight(3);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}