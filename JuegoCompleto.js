class TP5 {

  constructor() {
    textSize(24);
    textAlign(CENTER, CENTER);
    this.Juego1=new juego();
    this.botonInicio= new boton(width/2-100, 600, "Iniciar");
    this.botonFinal= new boton(width/2-100, 600, "Reiniciar");
    this.pausa=false;
    this.escenario=-1;
  }

  dibujar() {
    switch(this.escenario) {
      case-1:
      push();
      background(0);
      fill(255);
      text("Tu objetivo es que mientras te muevas tienes que agarrar, a tu elección, trigo y/o zanahorias, mientras esquivas piedras en el camino, te puedes mover de lado a lado con las flechas del teclado",100,100,600,600);
      this.botonInicio.dibujar();
      pop();
      break;
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
      image(imagenes[3][0], 0, 0, width, height);
      this.Juego1.reiniciar();
      this.botonFinal.dibujar();
      break;
    case 2:
      if (this.Juego1.DevolverPuntajeTrigo()==0&&this.Juego1.DevolverPuntajeZanahoria()==0) {
        push();
        background(200, 0, 0);
        fill(255);
        text("Perdiste", width/2, height/2);
        pop();
      } else {
        let resultado =this.Juego1.DevolverPuntajeTrigo()-this.Juego1.DevolverPuntajeZanahoria();
        if (resultado<-20) {
          image(imagenes[3][1], 0, 0, width, height);
        } else if (resultado<0) {
          image(imagenes[3][2], 0, 0, width, height);
        } else if (resultado>20) {
          image(imagenes[3][4], 0, 0, width, height);
        } else if (resultado>=0) {
          image(imagenes[3][3], 0, 0, width, height);
        }
        this.Juego1.reiniciar();
        this.botonFinal.dibujar();
      }
      break;
    }
  }

  actualizar() {
    switch(this.escenario) {
      case-1:
      this.botonInicio.actualizar();
      break;
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
    case 1:
      this.botonFinal.actualizar();
      break;
    case 2:
      this.botonFinal.actualizar();
      break;
    }
  }

  tecladoApretado() {
    switch(this.escenario) {
    case 0:
      this.Juego1.keyApretado()
        if (keyCode==ESCAPE) {
        this.pausa=!this.pausa;
      }
      break;
    }
  }
  tecladoLibre() {
    this.Juego1.keyLibre()
  }

  mouseApretado() {
    switch(this.escenario) {
      case-1:
      if(this.botonInicio.mouse()){
      this.escenario=0;
      }
      break;
    case 1:
      if(this.botonFinal.mouse()){
      this.escenario=0;
      }
      break;
    case 2:
      if(this.botonFinal.mouse()){
      this.escenario=0;
      }
      break;
    }
  }
}
