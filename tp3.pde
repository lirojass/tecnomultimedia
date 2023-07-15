
//aviso que no lo pude terminar para la entrega, esta para una correcion

int miTexto=0;
int frame;
int agrado;
String pantalla;
String[] dialogo;
int numFrames = 4;
PFont texto;
boolean debug=false;

void setup() {
  size(600, 600);
  frameRate(8);
  texto = loadFont("Cambria-48.vlw");
  imagenes();
  dialogo= loadStrings("tp3diagolo.txt");
  pantalla="Menu";
  agrado=0;
  textSize(50);
  textFont(texto);
  fill(0);
  setDefault();
}

void draw() {
  int frame = frameCount % numFrames;
  println(miTexto);
  background(255);
  switch(pantalla) {
  case "Menu":
    image(fondo[0], 0, 0);
    image(images[0][frame], 30, 0);
    text(dialogo[miTexto], 120, 80);
    boton(50, 500, 100, 50, 0, 1, "Intro", "cuadrada");
    boton(450, 500, 100, 50, 0, 0, "Guion", "cuadrada");
    break;
  case "Intro":
    image(fondo[3], 0, 0);
    if (miTexto>=2) {
      image(images[10][frame], 0, 0);
    }
    if (miTexto>=3) {
      image(images[11][frame], 0, 0);
    }
    if (miTexto>=4) {
      image(images[12][frame], 0, 0);
      boton(450, 500, 100, 50, 0, 1, "Conejos", "Siguiente");
    }
    caja_de_texto(miTexto, 50, 50, 500, 100, 30);
    break;
  case "Guion":
    image(fondo[1], 0, 0);
    boton(50, 500, 100, 50, 0, 0, "Menu", "cuadrada");
    break;
  case "Conejos":
    image(fondo[4], 0, 0);
    image(images[13][frame], 0, 0);
    caja_de_texto(miTexto, 50, 50, 500, 100, 30);
    boton(450, 500, 100, 50, 0, 1, "Caza", "Siguiente");
    break;
  case "Caza":
    background(255);
    image(fondo[2], 0, 0);
    int lugar= round(map(mouseX, 0, 600, 1, 5));
    image(images[lugar][frame], 0, 0);
    boton(0, 430, 150, 100, 0, 1, "Llamado", "invisible");
    if (mouseX>0 && mouseX<0+150 && mouseY>430 && mouseY<450+100) {
      image(images[7][frame], 0, 0);
    } else {
      image(images[6][frame], 0, 0);
    }
    boton(420, 330, 180, 200, 1, 1, "Llamado", "invisible");
    if (mouseX>420 && mouseX<420+180 && mouseY>330 && mouseY<330+200) {
      image(images[9][frame], 0, 0);
    } else {
      image(images[8][frame], 0, 0);
    }
    caja_de_texto(miTexto, 50, 50, 500, 150, 30);
    break;
  case "Llamado":

    break;
  default:
    background(200);
    break;
  }
}

void mousePressed() {
  switch(pantalla) {
  case "Intro":
    if (miTexto<4) {
      miTexto++;
    }
    break;
  case "Final":
    setDefault();
    pantalla="Menu";
    break;
  }
}

void keyPressed() {
  debug=!debug;
}
