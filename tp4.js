
//

let pantalla= "Menu";
let pelotaPosX;
let pelotaPosY;
let pelotaTamaño=20;
let pelotaVelX;
let pelotaVelY;
let raquetaPosX;
const raquetaPosY=500;
const raquetaTamaño=150;
const ladrilloCantidadX=14;
const ladrilloCantidadY=8;
const offset=75;
let ladrilloCheck= new Array(ladrilloCantidadX);
let multiplicador=1;
let cantidad=0;
let cantidadOffset=0;
let puntaje=0;
let font;
let vidaPerdida=false;
let vidas=3;
let tiempoEspera;
let instrucciones = [];

function preload() {
  font= loadFont("data/8bitoperator_jve.ttf");
  instrucciones = loadStrings("data/Instrucciones.txt");
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.position(windowWidth/2-width/2, windowHeight/2-height/2);
  for (let i=0; i<ladrilloCantidadX; i++) {
    ladrilloCheck[i]= new Array(ladrilloCantidadY)
  }
  setDefault();
  colorMode(HSB);
  textFont(font);
  textSize(36);
}

function draw() {
 console.log(key);
  switch(pantalla) {

  case "Menu":
    background(0);
    push();
    textSize(150);
    textAlign(CENTER, CENTER);
    fill(255);
    text("BREAKOUT", 400, 150);
    pop();
    botonGenericoGrafico(350, 300, 100, 50, 35, "Jugar");
    botonGenericoGrafico(280, 370, 240, 50, 35, "Instrucciones");
    botonGenericoGrafico(330, 440, 140, 50, 35, "Creditos");
    break;

  case "Instrucciones":
    background(0);
    raqueta();
    fill(255);
    textAlign(CENTER, CENTER);
    text("Instrucciones", 400, 50);
    textAlign(LEFT, CENTER);
    for (let i=0; i<instrucciones.length; i++) {
      text(instrucciones[i], 50, 100+i*50);
    }
    botonGenericoGrafico(width-100, 20, 80, 80, 50, ">");
    break;

  case "Creditos":
    background(0);
    textAlign(RIGHT, TOP);
    textSize(35);
    fill(64, 255, 255);
    text("Desarrolladores:", 300, 100);
    text("Diseñadores:", 300, 150);
    text("Programadores:", 300, 320);
    text("Diseñadores:", 300, 470);
    text("Programadores:", 300, 520);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Juego original", 400, 50);
    text("Juego TP4", 400, 420);
    textAlign(LEFT, TOP);
    text("Atari,Inc", 500, 100);
    text("Nolan Bushnell", 500, 150);
    text("Steve Wozniak", 500, 190);
    text("Steve Bristow", 500, 230);
    text("Steve Jobs", 500, 270);
    text("Atari 2600", 500, 320);
    text("Brad Stewart", 500, 360);
    text("Lisandro Rojas", 500, 470);
    text("Lisandro Rojas", 500, 520);
    botonGenericoGrafico(width-100, 20, 80, 80, 50, ">");
    break;

  case "Juego":
    console.log( cantidad );
    background(0);
    if (vidaPerdida) {
      if (keyIsPressed) {
        if (key==' ' && millis()-tiempoEspera>=2000) {
          vidaPerdida=false;
        }
      }
    } else {
      pelota();
    }
    raqueta();
    let tamañoLadrilloX=round(width/ladrilloCantidadX);
    let tamañoLadrilloY=round(200/ladrilloCantidadY);
    push();
    for (let i=0; i<ladrilloCantidadX; i++) {
      for (let j=0; j<ladrilloCantidadY; j++) {
        if (ladrilloCheck[i][j]) {
          let hue=round(map(j, 0, ladrilloCantidadY, 0, 255));
          ladrillo(i*tamañoLadrilloX, j*tamañoLadrilloY+offset, tamañoLadrilloX, tamañoLadrilloY, hue);
        }
      }
    }
    pop();
    push();
    textAlign(RIGHT, TOP);
    fill(255);
    text(puntaje, width-20, 20);
    textAlign(LEFT, TOP);
    text("X"+vidas, 20, 20);
    pop();
    if (keyIsPressed) {
      if (key=='r') {
        setDefault();
      }
    }
    if (Ganar()) {
      pantalla="Fin del Juego";
    }
    if (vidas==-1) {
      pantalla="Fin del Juego";
    }

    break;

  case "Fin del Juego":
    textAlign(CENTER, CENTER);
    background(0);
    if (Ganar()) {
      push();
      fill(255);
      textSize(48);
      text("GANASTE!", width/2, 200);
      pop();
    } else {
      push();
      fill(255);
      textSize(48);
      text("PERDISTE", width/2, 200);
      pop();
    }
    fill(255);
    textSize(35);
    text("Puntaje:"+puntaje,width/2,300);
    botonGenericoGrafico(100, 400, 150, 75, 35, "Menu");
    botonGenericoGrafico(550, 400, 150, 75, 35, "Reiniciar");
    break;
  }
}

function mousePressed() {

  switch(pantalla) {

  case "Menu":
    if (botonGenericoDeteccion(350, 300, 100, 50)) {
      pantalla="Juego";
      setDefault();
    }
    if (botonGenericoDeteccion(280, 370, 240, 50)) {
      pantalla="Instrucciones";
    }
    if (botonGenericoDeteccion(330, 440, 140, 50)) {
      pantalla="Creditos";
    }
    break;

  case "Instrucciones":
    if (botonGenericoDeteccion(width-100, 20, 80, 80)) {
      pantalla="Menu";
    }
    break;

  case "Creditos":
    if (botonGenericoDeteccion(width-100, 20, 80, 80)) {
      pantalla="Menu";
    }
    break;
    
    case "Fin del Juego":
    if (botonGenericoDeteccion(550, 400, 150, 75)) {
      pantalla="Juego";
      setDefault();
    }
    if (botonGenericoDeteccion(100, 400, 150, 75)) {
      pantalla="Menu";
    }
    break;
  }
}

function setDefault() {
  pelotaPosX=390;
  pelotaPosY=400;
  pelotaVelX=2;
  pelotaVelY=-2;
  raquetaPosX=350;
  multiplicador=1;
  cantidad=0;
  cantidadOffset=0;
  puntaje=0;
  vidaPerdida=false;
  vidas=3
    for (let i=0; i<ladrilloCantidadX; i++) {
    for (let j=0; j<ladrilloCantidadY; j++) {
      ladrilloCheck[i][j]=true;
    }
  }
}

function Ganar() {
  let checkGanar=true;
  for (let i=0; i<ladrilloCantidadX; i++) {
    for (let j=0; j<ladrilloCantidadY; j++) {
      if (ladrilloCheck[i][j]) {
        checkGanar=false;
      }
    }
  }
  return checkGanar;
}
