//No libraries used but can use Box2d

class Car{
    constructor(x,y,width,height){
        // Storing as atributes
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=3;
        this.friction=0.05;
        this.angle=0;


        this.controls=new Controls();

    }

    //Update method
    update(){
        this.#move(); //Creating a method for all the Move Update functions
    }

    #move(){
      if(this.controls.forward){
          this.speed+=this.acceleration; //Speed is going off by increasing acceleration (forward)
      }
      if(this.controls.reverse){
          this.speed-=this.acceleration; //Speed is going off by increasing acceleration but now backwards
      }

      // Putting a max cap on the speed
      if(this.speed>this.maxSpeed){
          this.speed=this.maxSpeed;
      }

      if(this.speed<-this.maxSpeed/2){
          this.speed=-this.maxSpeed/2; //Indicate the car is going backwards
      }

      // If speed is less than 0, decrease it by the friction
      if(this.speed>0){
          this.speed-=this.friction;
      }

      // If the speed is greater than 0 add friction
      if(this.speed<0){
          this.speed+=this.friction;
      }

      if(Math.abs(this.speed)<this.friction){
          this.speed=0;
      }

      // Flip of speed isnt 0
      if(this.speed!=0){
          const flip=this.speed>0?1:-1; //Value of this flip is 1 or -1 based
          // on the speed/ Can flip the controls backwards.

      //Left Controls
      if(this.controls.left){
          this.angle+=0.03*flip; //Flip flips the controls
      }

      //Right Controls
      if(this.controls.right){
          this.angle-=0.03*flip;//Flip flips the controls
      }

      this.x-=Math.sin(this.angle)*this.speed; //Sin for X
      this.y-=Math.cos(this.angle)*this.speed; //Cosine for Y
    }
    }

    // Draw class
    draw(ctx){
      ctx.save();
      ctx.translate(this.x,this.y);
      ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
          // The x of the car is the center inside, parts front/back/sides
          -this.width/2,
          -this.height/2,
          this.width,
          this.height
        );
        ctx.fill();

        ctx.restore();
    }
}
