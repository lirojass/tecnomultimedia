void boton(int xpos, int ypos, int xsize, int ysize, int punto, int valor, String destino, String visibilidad) {

  if (mousePressed==true && mouseX>xpos && mouseX<xpos+xsize && mouseY>ypos && mouseY<ypos+ysize) {
    pantalla= destino;
    agrado+=punto;
    miTexto+=(valor);
  }
  switch(visibilidad) {
  case "cuadrada":
    pushStyle();
    if (mouseX>xpos && mouseX<xpos+xsize && mouseY>ypos && mouseY<ypos+ysize) {
      fill(150);
    } else {
      fill(255);
    }
    rect(xpos, ypos, xsize, ysize);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(destino, xpos+(xsize/2), ypos+(ysize/2));
    popStyle();
    break;
  case "Siguiente":
    pushStyle();
    if (mouseX>xpos && mouseX<xpos+xsize && mouseY>ypos && mouseY<ypos+ysize) {
      fill(150);
    } else {
      fill(255);
    }
    rect(xpos, ypos, xsize, ysize);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Siguiente", xpos+(xsize/2), ypos+(ysize/2));
    popStyle();
    break;
  case "invisible":
    if (debug) {
      pushStyle();
      noFill();
      stroke(255, 0, 0);
      rect(xpos, ypos, xsize, ysize);
      popStyle();
    }
    break;
  }
}
