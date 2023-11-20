class boton {

  constructor(x, y, texto) {
    this.x = x;
    this.y = y;
    this.ancho=200;
    this.altura=100;
    this.texto=texto;
    this.actualizador=false;
  }

  dibujar() {
    push();
    strokeWeight(5);
    if (this.actualizador) {
      fill(200);
    } else {
      fill(255);
    }
    rect(this.x, this.y, this.ancho, this.altura);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.texto,this.x, this.y, this.ancho, this.altura);
    pop()
  }

  actualizar() {
    if (mouseX>this.x && mouseX<this.x+this.ancho && mouseY>this.y && mouseY<this.y+this.altura) {
      this.actualizador=true;
    } else {
      this.actualizador=false;
    }
  }
  
  mouse(){
  return (mouseX>this.x && mouseX<this.x+this.ancho && mouseY>this.y && mouseY<this.y+this.altura)
  }
  
}

class botonesLlamado{

constructor(x, y, ancho,altura){
  this.x = x;
    this.y = y;
    this.ancho=ancho;
    this.altura=altura;
    this.actualizador=false;
}

dibujar(imagen1,imagen2){
  if (this.actualizador) {
    image(imagen2, 0, 0, width, height);
  } else {
    image(imagen1, 0, 0, width, height);
  }
}

actualizar() {
  if (mouseX>this.x && mouseX<this.x+this.ancho && mouseY>this.y && mouseY<this.y+this.altura) {
    this.actualizador=true;
  } else {
    this.actualizador=false;
  }
}

mouse(){
  return (mouseX>this.x && mouseX<this.x+this.ancho && mouseY>this.y && mouseY<this.y+this.altura)
  }

}
