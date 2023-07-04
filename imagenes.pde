void imagenes() {
  animacion(0, "gatomenu", ".png");
  menufondo= loadImage("pmenufondo.jpg");
  guion= loadImage("guion.jpg");
}

void animacion(int valor, String nombre, String formato) {
  for (int i = 0; i < numFrames; i++) {
    String imageName = nombre + nf(i, 4) + formato;
    images[valor][i] = loadImage(imageName);
  }
}
