class Ground{
    constructor(x,y,width,height)
    {
        var ground_options = {
 isStatic:true,
 friction:1.0

        }
this.width=width
this.height=height
this.body=Bodies.rectangle(x,y,this.width,this.height,ground_options)
World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
     rectMode(CENTER);

     
     rect(pos.x , pos.y, this.width , this.height)
    }
}

