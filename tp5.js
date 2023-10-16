let GatoConBotas

//esto es una version sin los graficos finales o los finales en si

  function setup() {
  let canvas = createCanvas(800, 800);
  canvas.position(windowWidth/2-width/2, windowHeight/2-height/2);
  GatoConBotas= new TP5();
}


function draw() {
  GatoConBotas.dibujar();
  GatoConBotas.actualizar();
  console.log(frameRate());
}

function keyPressed() {
  GatoConBotas.tecladoApretado();
}

function keyReleased() {
  GatoConBotas.tecladoLibre();
}
