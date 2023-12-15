class piedra {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho=60;
    this.altura=60;
    this.imagen= round(random(1));
  }

  dibujar(sprite) {
    image(sprite[1][this.imagen],this.x, this.y, this.ancho, this.altura);
  }

  actualizar(valor) {
    this.y+=valor;
    if (this.y>=900) {
      this.x=round(random(0, 10))*74;
      this.y=random(-2000, -1000);
    }
  }
}
