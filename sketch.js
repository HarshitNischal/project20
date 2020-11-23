var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
speed=random(55,90)
weight=random(400,1500)
car=createSprite(50,200,50,50);
car.shapecolor="black"
  wall=createSprite(900,200,60,height/2);
car.velocityX = speed;
}

function draw() 
{
  background(255,255,255);  
 if(wall.x-car.x < (car.width+wall.width)/2)

car.velocityX=0;
var deformation=0.5 * weight * speed* speed/22509; 
 if(deformation>180)
 {
    car.shapeColor=color(255,0,0);
 }
 
 if(deformation<180 && deformation>100)
 {
    car.shapeColor=color(230,230,0);
 }
 
 if(deformation<100)
 {
    car.shapeColor=color(0,255,0);
 }


 
 
 
 
 
 //mObj.x=mouseX
 //mObj.y=mouseY
 //console.log ((mObj.width+fObj.width)/2);
 //console.log(mObj.x)
 //console.log(mObj.x-fObj.x)
 //console.log(fObj.x-mObj.x)
 //if(isTouching(mObj,fObj))
 
  //{
   // mObj.shapeColor="red";
   // fObj.shapeColor="red";
   //}
   //else
   //{
    //mObj.shapeColor="green";
    //fObj.shapeColor="green";
   //}
 //bounce(Obj1,Obj2);
 
 drawSprites();
}


