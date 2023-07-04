
//aviso que esto es una version algo primitiva, solo funciona como una fundacion

int agrado;
String pantalla;
String[] dialogo;
int numFrames = 4;
PImage menufondo;
PImage guion;
PImage[] [] images = new PImage[10][numFrames];

void setup() {
  size(600, 600);
  frameRate(8);
  imagenes();
  dialogo= loadStrings("tp3diagolo.txt");
  pantalla="Menu";
  agrado=0;
  textSize(50);
  fill(0);
}

void draw() {
  int frame = frameCount % numFrames;
  background(255);
  switch(pantalla) {
  case "Menu":
    image(menufondo, 0, 0);
    image(images[0][frame], 30, 0);
    text(dialogo[0], 120, 80);
    boton(50, 500, 100, 50, 0, "Intro", "cuadrada");
    boton(450, 500, 100, 50, 0, "Guion", "cuadrada");
    break;
  case "Intro":
    text(dialogo[1], 120, 80);
    break;
  case "Guion":
    image(guion, 0, 0);
    boton(50, 500, 100, 50, 0, "Menu", "cuadrada");
    break;
  }
}
