var fr ,mr

function setup() {
  createCanvas(800,400);
 fr= createSprite(200,200,50,80);
 fr.shapeColor="red"
fr.debug=true;
 mr= createSprite(400,800,80,50);
 mr.shapeColor="blue"
 mr.debug=true;
}

function draw() {
  background("black");  
  mr.x=mouseX
  mr.y=mouseY
if(mr.x-fr.x<fr.width/2+mr.width/2 &&
  fr.x-mr.x< fr.width/2+mr.width/2 &&
  mr.y-fr.y<fr.height/2+mr.height/2 &&
  fr.y-mr.y< fr.height/2+mr.height/2){
  mr.shapeColor="red"
  fr.shapeColor="red"
}else {
  mr.shapeColor="green"
  fr.shapeColor="green"
}


  drawSprites();
}