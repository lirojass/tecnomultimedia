void cantidad() {
  pushStyle();
  fill(0);
  float val = valor(cant);
  if (cant>4) {
    text("La recreacion es "+val+" veces mas grande", 600, 380);
    return;
  } else if (cant==4) {
    text("La recreacion es igual en tamaño", 600, 380);
    return;
  } else if (cant<4) {
    text("La recreacion es "+val+" veces mas chica", 600, 380);
    return;
  }
  popStyle();
}

float valor(float val){
 val= cant/4;
return val;
}
