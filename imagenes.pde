String[] nombredefondos;
PImage[] fondo;
PImage[] [] images = new PImage[30][numFrames];

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
  animacion(19, "intro", ".png");
  animacion(20, "Charla", ".png");
  animacion(21, "bota", ".png");
  animacion(22, "sombrero", ".png");
  animacion(23, "setup", ".png");
  animacion(24, "Llamadodueño", ".png");
   for (int i=0; i<2; i++) {
    String nombre= "Llamadom" + i;
    animacion(i+25, nombre, ".png");
  }
   for (int i=0; i<2; i++) {
    String nombre= "Llamados" + i;
    animacion(i+27, nombre, ".png");
  }

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
