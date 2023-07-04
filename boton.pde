void boton(int xpos, int ypos, int xsize, int ysize, int punto, String destino, String visibilidad) {
  if (mouseX>xpos && mouseX<xpos+xsize && mouseY>ypos && mouseY<ypos+ysize) {
    pushStyle();
    fill(0, 100);
    rect(0, 0, width, height);
    popStyle();
  }
  if (mousePressed==true && mouseX>xpos && mouseX<xpos+xsize && mouseY>ypos && mouseY<ypos+ysize) {
    pantalla= destino;
    agrado+=punto;
  }
  switch(visibilidad) {
  case "cuadrada":
    pushStyle();
    fill(255);
    rect(xpos, ypos, xsize, ysize);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(destino, xpos+(xsize/2), ypos+(ysize/2));
    popStyle();
    break;
  }
}
