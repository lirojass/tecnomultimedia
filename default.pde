void setDefault() {
  miTexto=0;
  agrado=0;
  pos1=-500;
  pos2=500;
}

String finalfinal ( int valor ) {
  if (valor==0) {
    return "Final malo";
  } else if (valor==1) {
    return "Final bueno";
  }else if (valor==2) {
    return "Final verdadero";
  }else{
  return "fallo";
  }
}
