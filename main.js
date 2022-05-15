const canvas=document.getElementById("myCanvas");
// The road on canvas

canvas.width = 200;

//Car on Canvas
const ctx = canvas.getContext("2d"); //2d Context
const car=new Car(100,100,30,50); //(x,y,width,height) in pixels

animate();

function animate(){
  car.update();

  // The road on canvas adjusts to the update and animate function
  canvas.height=window.innerHeight;

  car.draw(ctx);
  requestAnimationFrame(animate); //Calls the function again and again recrusion
}
