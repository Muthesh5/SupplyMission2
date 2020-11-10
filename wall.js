class Wall
{
  constructor(x,y,width,height,angle)
  {
      var opt = {
          isStatic:true
      }
    this.body=Bodies.rectangle(x,y,width,height,opt) 
    this.width = width;
    this.height = height;
    World.add(world,this.body)
    Matter.Body.setAngle(this.body,angle);

  }
  display()
  {
      rectMode(CENTER);
      var pos = this.body.position;
      fill("red")
      rect(pos.x,pos.y,this.width,this.height)
  }
}