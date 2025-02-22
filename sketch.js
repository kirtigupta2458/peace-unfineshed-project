
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var house
var balloons=star,star1,star2,star3,star4,star5,star6,star7

function preload(){
  bg=loadImage("bg.jpg")
  bl=loadImage("ball.png")
  home=loadImage("house.png")
  st=loadImage("star.png")
  st1=loadImage("star1.png")
  st2=loadImage("star2.png")
  st3=loadImage("star3.png")
  st4=loadImage("star4.png")
  st5=loadImage("star5.png")
  st6=loadImage("star6.png")
  st7=loadImage("star7.png")
  bal=loadImage("balloon.png")
  bal1=loadImage("balloon1.png")
  bal2=loadImage("balloon2.png")
  bal3=loadImage("balloon3.png")
  bal4=loadImage("balloon4.png")
  bal5=loadImage("balloon5.png")
  
 
}


function setup() {
  createCanvas(600,600);
 


  engine = Engine.create();
  world = engine.world;

  house=createSprite(490,520,50,50)
  house.addImage(home)

  star=createSprite(150,250,60,60)
  star.addImage(st)
  star.scale=0.2
  star.velocityY+=0.8;

  star1=createSprite(290,350,60,60)
  star1.addImage(st1)
  star1.scale=0.2
  star1.velocityY+=0.8;

  star2=createSprite(360,430,60,60)
  star2.addImage(st2)
  star2.scale=0.2
  star2.velocityY+=0.8;

  star3=createSprite(80,80,60,60)
  star3.addImage(st3)
  star3.scale=0.2
  star3.velocityY+=0.8;

  star4=createSprite(250,150,60,60)
  star4.addImage(st4)
  star4.scale=0.2
  star4.velocityY+=0.8;

  star5=createSprite(255,420,60,60)
  star5.addImage(st5)
  star5.scale=0.2
  star5.velocityY+=0.8;

  star6=createSprite(450,250,60,60)
  star6.addImage(st6)
  star6.scale=0.2
  star6.velocityY+=0.8;

  star7=createSprite(350,250,60,60)
  star7.addImage(st)
  star7.scale=0.2
  star7.velocityY+=0.8;

	balloon= createImg(bal)
	balloon.position(360,520)
	balloon.size(60,60)
	balloon.mouseClicked(Blower)
  
	balloon1= createImg(bal1)
	balloon1.position(260,520)
	balloon1.size(60,60)
	balloon1.mouseClicked(Blower1)
	
	balloon2= createImg(bal2)
	balloon2.position(160,520)
	balloon2.size(60,60)
	balloon2.mouseClicked(Blower2)
	
	balloon3= createImg(bal3)
	balloon3.position(60,520)
	balloon3.size(60,60)
	balloon3.mouseClicked(Blower3)
	
	balloon4= createImg(bal4)
	balloon4.position(60,320)
	balloon4.size(60,60)
	balloon4.mouseClicked(Blower4)

	balloon5= createImg(bal5)
	balloon5.position(60,120)
	balloon5.size(60,60)
	balloon5.mouseClicked(Blower5)
  

  
}


function draw() 
{
  background(bg);
  Engine.update(engine);
  



}

function Blower(){
  Matter.Body.applyForce(balloon,{x:0,y:0},{x:0,y:-0.03})
  air.play()
}
function Blower1(){
  Matter.Body.applyForce(balloon1,{x:0,y:0},{x:0,y:-0.03})
  air.play()
}
function Blower2(){
  Matter.Body.applyForce(balloon2,{x:0,y:0},{x:0,y:-0.03})
  air.play()
}
function Blower3(){
  Matter.Body.applyForce(balloon3,{x:0,y:0},{x:0,y:-0.03})
  air.play()
}
function Blower4(){
  Matter.Body.applyForce(balloon4,{x:0,y:0},{x:-0.03,y:0})
  air.play()
}
function Blower5(){
  Matter.Body.applyForce(balloon5,{x:0,y:0},{x:-0.03,y:0})
  air.play()
}


