class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness:0,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pos1 = this.chain.bodyA.position;
        var pos2 = this.chain.bodyB.position;

        var Anchor1x = pos1.x;
        var Anchor1y = pos1.y;
        var Anchor2x = pos2.x+this.offsetX;
        var Anchor2y = pos2.y+this.offsetY;
        stroke("black");
        strokeWeight(3);
        line(Anchor1x,Anchor1y,Anchor2x,Anchor2y);
    }
}