
//aviso que no lo pude terminar para la entrega, esta para una correcion

int miTexto=-1;
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
    boton(50, 500, 100, 50, 0, 0, "Intro", "cuadrada");
    boton(450, 500, 100, 50, 0, 0, "Creditos", "cuadrada");
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
      boton(450, 500, 100, 50, 0, 0, "Conejos", "Siguiente");
    }
    caja_de_texto(miTexto, 50, 50, 500, 100, 20);
    break;
  case "Creditos":
    image(fondo[0], 0, 0);
    if (mouseX>450 && mouseX<450+100 && mouseY>500 && mouseY<500+50) {
      image(images[15][frame], 0, 0);
    } else {
      image(images[14][frame], 0, 0);
    }
    fill(0);
    text("Autor: Charles Perrault", 50, 80);
    fill(255);
    text("Programacion e Ilustraciones: Lisandro Rojas 94036/7", 50, 150, 500, 400);
    boton(450, 500, 100, 50, 0, 0, "Menu", "cuadrada");
    break;
  case "Conejos":
    image(fondo[4], 0, 0);
    image(images[13][frame], 0, 0);
    caja_de_texto(miTexto, 50, 50, 500, 100, 20);
    if (miTexto>=6) {
      boton(450, 500, 100, 50, 0, 1, "Caza", "Siguiente");
    }
    break;
  case "Caza":
    background(255);
    image(fondo[2], 0, 0);
    int lugar= round(map(mouseX, 0, 600, 1, 5));
    image(images[lugar][frame], 0, 0);
    boton(0, 430, 150, 100, 1, 2, "CazaFallo", "invisible");
    if (mouseX>0 && mouseX<0+150 && mouseY>430 && mouseY<450+100) {
      image(images[7][frame], 0, 0);
    } else {
      image(images[6][frame], 0, 0);
    }
    boton(420, 330, 180, 200, 0, 1, "CazaExito", "invisible");
    if (mouseX>420 && mouseX<420+180 && mouseY>330 && mouseY<330+200) {
      image(images[9][frame], 0, 0);
    } else {
      image(images[8][frame], 0, 0);
    }
    caja_de_texto(miTexto, 50, 50, 500, 150, 30);
    break;
  case "CazaExito":
    image(images[16][frame], 0, 0);
    caja_de_texto(miTexto, 50, 50, 500, 100, 20);
      boton(450, 500, 100, 50, 1, 0, "CazaExito1", "Siguiente");
    break;
    case "CazaExito1":
    image(images[17][frame], 0, 0);
    caja_de_texto(miTexto, 50, 50, 500, 100, 20);
      boton(450, 500, 100, 50, 2, 0, "Llamado", "Siguiente");
    break;
  case "CazaFallo":
    image(images[18][frame], 0, 0);
    caja_de_texto(miTexto, 50, 50, 500, 100, 20);
      boton(450, 500, 100, 50, 1, 0, "CazaFallo1", "Siguiente");
    break;
    case "CazaFallo1":
    image(images[18][frame], 0, 0);
    caja_de_texto(miTexto, 50, 50, 500, 100, 20);
      boton(450, 500, 100, 50, 1, 0, "Llamado", "Siguiente");
    break;
  case "Llamado":

    break;
  default:
    background(200);
    break;
  }
}

void mouseClicked() {
  switch(pantalla) {
  case "Intro":
    if (miTexto<4) {
      miTexto++;
    }
    break;
  case "Conejos":
    if (miTexto<6) {
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
