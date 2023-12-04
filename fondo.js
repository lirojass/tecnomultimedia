class fondo {

  constructor(y) {
    this.x=0;
    this.y=y;
  }

  dibujar(sprite) {
    image(sprite[1][6], this.x, this.y, width, height);
  }

  actualizar(velocidad) {
    this.y+=velocidad
      if (this.y>=800) {
      this.y=-800;
    }
  }
}
