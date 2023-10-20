let GatoConBotas;
//let fuente
//esto es una version sin los graficos finales o los finales en si


function setup() {
  let canvas = createCanvas(800, 800);
  canvas.position(windowWidth/2-width/2, windowHeight/2-height/2);

  //textFont(fuente);
  //textSize(48)
  GatoConBotas = new TP5();
}


function draw() {
  GatoConBotas.dibujar();
  GatoConBotas.actualizar();
}

function keyPressed() {
  GatoConBotas.tecladoApretado();
}

function keyReleased() {
  GatoConBotas.tecladoLibre();
}

function mousePressed() {
  GatoConBotas.mouseApretado()
}
