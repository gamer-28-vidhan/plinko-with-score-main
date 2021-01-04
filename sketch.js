const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground
var prtx;


var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var turn = 0;
var gamestate = "play"

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(240,745,480,20)

   g1=new Ground(0,700,10,300)
   g2=new Ground(65,700,10,300)
   g3=new Ground(135,700,10,300)
   g4=new Ground(205,700,10,300)
   g5=new Ground(275,700,10,300)
   g6=new Ground(345,700,10,300)
   g7=new Ground(415,700,10,300)
   g8=new Ground(475,700,10,300)



    for (var j =20; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 20; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 20; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 20; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {

  background("darkgreen");

  fill ("white")
  textSize(20)
 text("Score : " +score , 20,30);

 fill("white")
text ("500",15,600)

fill("white")
text ("500",85,600)

fill("white")
text ("200",155,600)

fill("white")
text ("100",225,600)

fill("white")
text ("200",295,600)

fill("white")
text ("100",365,600)

fill("white")
text ("100",430,600)






  Engine.update(engine);

  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 

   if(prtx != null){

      prtx.display()
   
      if(prtx.body.position.y > 760) 

      {
if(prtx.body.position.x < 300){
   score=score+500
   prtx=null

   if(turn>=5){
      gamestate="end"
   }
}
}

         
         
      }
   

   g1.display()
   g2.display()
   g3.display()
   g4.display()
   g5.display()
   g6.display()
   g7.display()
   g8.display()

}

function mousePressed(){

if (gamestate!== "end"){
   turn++

   prtx = new Particles(mouseX, 20,20,20)

}
}