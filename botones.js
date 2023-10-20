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
  
  mouse(lugarActual){
  return (mouseX>this.x && mouseX<this.x+this.ancho && mouseY>this.y && mouseY<this.y+this.altura)
  }
  
}
