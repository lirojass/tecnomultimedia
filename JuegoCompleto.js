class TP5 {

  constructor() {
    textSize(24);
    textAlign(CENTER, CENTER);
    this.Juego1=new juego();
    this.pausa=false;
    this.escenario=0;
  }

  dibujar() {
    switch(this.escenario) {
    case 0:
      this.Juego1.dibujar()
        if (this.pausa) {
        push();
        fill(0, 70);
        rect(0, 0, width, height);
        fill(255);
        text("Pausa", width/2, height/2);
        pop();
      }
      break;
    case 1:
      push();
      background(200, 0, 0);
      fill(255);
      text("Perdiste", width/2, height/2);
      pop();
      break;
    case 2:
      push();
      background(0, 0, 200);
      fill(255);
      text("Final", width/2, height/2);
      pop();
      break;
    }
  }

  actualizar() {
    switch(this.escenario) {
    case 0:
      if (!this.pausa) {
        this.Juego1.actualizar()
      }
      if (this.Juego1.checkJuegoPerdido()) {
        this.escenario=1;
      }
      if (this.Juego1.finDelJuego()) {
        this.escenario=2;
      }
      break;
    }
  }

  tecladoApretado() {
    this.Juego1.keyApretado()
      if (keyCode==ESCAPE) {
      this.pausa=!this.pausa;
    }
  }

  tecladoLibre() {
    this.Juego1.keyLibre()
  }
}
