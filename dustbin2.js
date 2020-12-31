class Dustbin2 {

    constructor(x, y) {

    var options = {isStatic:true}
    this.width =200;
    this.height  = 100;

    this.leftbody = Bodies.rectangle(x-100, y, width, height, options)
    this.rightbody = Bodies.rectangle(x+100, y, width, height, options)
    this.bottombody = Bodies.rectangle(x, y, width, height, options)

    this.body = Bodies.rectangle(x, y, width, height, options)
    //this.width = width;
    //this.height = height;
    
    //this.flag = img;

    this.image = loadImage("sprites/dustbin.png")
    World.add(world, this.body)



    }

    display() {
        
        var leftpos = this.leftbody.position;
        var rightpos = this.rightbody.position;
        var bottompos = this.bottombody.position


        push()
        stroke("grey")
        fill("grey")
        rectMode()
       
        rect(leftpos.x,leftpos.y, this.width, this.height)
        rect(rightpos.x, rightpos.y,this.width,this.height)
        imageMode(CENTER);
        
        
        image(this.image, bottompos.x, bottompos.y, this.width, this.height);
        
        pop()       
    }
}