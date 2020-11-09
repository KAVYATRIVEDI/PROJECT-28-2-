class Tree{
    constructor(){

        var options={
            isStatic:false,
            restituion:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.rectangle(x, y, width, height);
        this.width=width;
        this.height=height;
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.body);
    }
    display(){
        push();
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
} 