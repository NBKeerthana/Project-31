const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var cs1,cs2,cs3,cs4;
var ground
var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;
var division1, division2, division3, division4, division5, division6, division7, division8, division9

function preload(){

}

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  fill('red')
  cs1 = Bodies.rectangle(0,0,5,800)
  cs2 = Bodies.rectangle(470,0,5,800)
  cs3 = Bodies.rectangle(0,0,800,5)
  cs4 = Bodies.rectangle(0,790,800,5)

  ground = new Ground(240,782,460,15)

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));    
  }

  division1 = new Divisions(15, 642, 10,265)
  division2 = new Divisions(74.9, 642, 10,265)
  division3 = new Divisions(130.6, 642, 10,265)
  division4 = new Divisions(186.3, 642, 10,265)
  division5 = new Divisions(242, 642, 10,265)
  division6 = new Divisions(297.7, 642, 10,265)
  division7 = new Divisions(353.4, 642, 10,265)
  division8 = new Divisions(409.1, 642, 10,265)
  division9 = new Divisions(464.8, 642, 10,265)

}

function draw() {
  background(0);
  Engine.update(engine);

  rect(cs1.position.x,cs1.position.y,10,800)
  rect(cs2.position.x,cs2.position.y,10,800)
  rect(cs3.position.x,cs3.position.y,800,10)
  rect(cs4.position.x,cs4.position.y,800,10)

  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()
  division8.display()
  division9.display()

  ground.display()

}