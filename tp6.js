let tp6;

function setup() {
  createCanvas(800, 800);
  //let canvas = createCanvas(800, 800);
  //canvas.position(windowWidth/2-width/2, windowHeight/2-height/2);
  textFont("Merriweather");
  tp6= new GatoConBotas();
}

function draw() {
tp6.dibujar(imagen,script);
tp6.actualizar();
}

function mousePressed(){
  tp6.mouse();
}

function keyPressed(){
  tp6.keyPresion();
}

function keyReleased(){
  tp6.keyLibre();
}
