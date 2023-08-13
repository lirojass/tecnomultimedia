void caja_de_texto(int texto, int xpos, int ypos, int xsize, int ysize, int textSize) {
  pushStyle();
  noStroke();
  fill(0, 150);
  rect(xpos, ypos, xsize, ysize, 10);
  textAlign(TOP, LEFT);
  textSize(textSize);
  fill(255);
  text(dialogo[texto], xpos+50, ypos+25, xsize-50, ysize-25);
  popStyle();
}
