var linkImg

function preload(){
linkImg = loadImage("link.gif");
}

function setup() {
    createCanvas(400,400);
    link = createSprite(180,340,30,30);
    link.scale=0.5
    link.addImage(linkImg); 
    //link.y = World.mouseY;
}

function draw() {
    drawSprites()
}
