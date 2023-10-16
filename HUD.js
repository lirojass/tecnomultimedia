class HUD {

  constructor(vidas, tiempo) {
    this.xVidas=25;
    this.yVidas=25;
    this.anchoVidas=50;
    this.alturaVidas=50;
    this.cantidadVidas=vidas;
    this.xTiempo=width-25;
    this.yTiempo=25;
    this.tamañoTexto=25;
    this.tiempo=tiempo;
  }

  dibujar(trigo,zanahorias,tiempo) {
    for (let i=0; i<this.cantidadVidas; i++) {
      push();
      noStroke();
      fill(255, 0, 0);
      rect(this.xVidas+this.anchoVidas*i+25*i, this.yVidas, this.anchoVidas, this.alturaVidas)
        pop();
    }
    fill(255);
    textAlign(CENTER,CENTER)
    textSize(48);
    text(tiempo,width/2,50);
    this.puntaje(trigo,zanahorias)
  }
  
  puntaje(trigo,zanahorias){
  push();
  noStroke();
  textAlign(LEFT,CENTER);
  textSize(24);
  image(imagenes[1][5],550,25,50,50);
  image(imagenes[1][3],675,25,50,50);
  fill(255);
  text(trigo,620,50);
  text(zanahorias,745,50);
  pop();
  }
  
  actualizar(nuevo){
  this.cantidadVidas=nuevo;
  }
  
}
