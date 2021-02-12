const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var object;
var ball1, ball2;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground1= new Ground(100,350,380,20);
    ball1= new Box(200,200,50,50);
    ball2= new Box(230,50,50,100);
}

function draw(){
    background(0);
    Engine.update(myEngine);
    ground1.display();
    ball1.display();
    ball2.display();
    

}
