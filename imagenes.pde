String[] nombredefondos;
PImage[] fondo;
PImage[] [] images = new PImage[20][numFrames];

void imagenes() {
  animacion(0, "gatomenu", ".png");
  for (int i=1; i<6; i++) {
    String nombre= "gatocaza" + i;
    animacion(i, nombre, ".png");
  }
  animacion(14, "creditos", ".png");
  animacion(15, "creditoss", ".png");
  animacion(6, "zanahoriacaza0", ".png");
  animacion(7, "zanahoriacaza1", ".png");
  animacion(8, "pastocaza0", ".png");
  animacion(9, "pastocaza1", ".png");
  animacion(16, "cazaExito", ".png");
  animacion(17, "cazaExitos", ".png");
  animacion(18, "cazaFallo", ".png");
  for (int i=10; i<13; i++) {
    String nombre= "inicio" + (i-9);
    animacion(i, nombre, ".png");
  }
  animacion(13, "boobookeys", ".png");
  String[] nombredefondos=loadStrings("fondos.txt");
  //
  fondo= new PImage[nombredefondos.length];
  for (int i=0; i<nombredefondos.length; i++) {
    fondo[i] = loadImage(nombredefondos[i]);
  }
}

void animacion(int valor, String nombre, String formato) {
  for (int i = 0; i < numFrames; i++) {
    String imageName = nombre + nf(i, 4) + formato;
    images[valor][i] = loadImage(imageName);
  }
}
