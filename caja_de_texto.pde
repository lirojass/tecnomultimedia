void caja_de_texto(int texto, int xpos, int ypos, int xsize, int ysize, int textSize) {
  pushStyle();
  for (int i=0; i<50; i++) {
    noStroke();
    fill(0, (i*4));
    rect(xpos+(i*2), ypos+(i*1.5), xsize-(i*4), ysize-(i*3), 10);
  }
  textAlign(TOP, LEFT);
  textSize(textSize);
  fill(255);
  text(dialogo[texto], xpos+50, ypos+25, xsize-50, ysize-25);
  popStyle();
}
