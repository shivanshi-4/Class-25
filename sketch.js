const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ground,box1,box2,pig1,bird,log1
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

ground=new Ground()
box1=new Box(700,320,70,70)
box2=new Box(920,320,70,70)
pig1=new Pig(810,350)
log1=new Log(810,260,300,PI/2)

box3=new Box(700,240,70,70)
box4=new Box(920,240,70,70)
pig2=new Pig(810,220)
log2=new Log(810,180,300,PI/2)

log3=new Log(870,120,150,-PI/7)
log4=new Log(760,120,150,PI/7)
box5=new Box(810,160,70,70)

bird=new Bird(31,67)

  
}

function draw() {
  background(0); 
  Engine.update(engine);
  box1.display()
  box2.display()
  pig1.display()
  bird.display()
  ground.display()
  log1.display()
  box3.display()
  box4.display()
  pig2.display()
  log2.display()
  log3.display()
  log4.display()
  box5.display()
  
  
}