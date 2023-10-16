class juego {

  constructor() {
    this.velocidad=5;
    this.tiempo=60;
    this.gato= new personaje();
    this.hud= new HUD(this.gato.vidas, 0);
    this.piedras = [];
    this.verduras= [];
    for (let i=0; i<10; i++) {
      this.piedras.push(new piedra(round(random(0, 10))*74, -100-random(100)-i*500));
    }
    for (let i=0; i<5; i++) {
      this.verduras.push(new vegetal(round(random(0, 10))*74, -100-random(100)-i*500, "trigo"));
    }
    for (let i=0; i<5; i++) {
      this.verduras.push(new vegetal(round(random(0, 10))*74, -100-random(100)-i*500, "zanahoria"));
    }
    this.puntajeT=0;
    this.puntajeZ=0;
  }

  dibujar() {
    background(100);
    for (let i=0; i<this.piedras.length; i++) {
      this.piedras[i].dibujar();
    }
    for (let i=0; i<this.verduras.length; i++) {
      this.verduras[i].dibujar();
    }
    this.gato.dibujar();
    this.hud.dibujar(this.DevolverPuntajeTrigo(), this.DevolverPuntajeZanahoria(), this.tiempo);
  }

  actualizar() {
    this.gato.actualizarMovimiento();
    this.hud.actualizar(this.gato.vidas);
    if (this.tiempo>0) {
      if (frameCount%60==0) {
        this.tiempo--;
      }
    }
    for (let i=0; i<this.piedras.length; i++) {
      this.piedras[i].actualizar(this.velocidad);
    }
    for (let i=0; i<this.verduras.length; i++) {
      this.verduras[i].actualizar(this.velocidad, this.gato, this.verduras[i]);
    }
    for (let i=0; i<this.piedras.length; i++) {
      if (colisionGenerica(this.gato, this.piedras[i])) {
        this.gato.muerte();
        break;
      }
    }
    for (let i=0; i<this.piedras.length; i++) {
      for (let j=0; j<this.piedras.length; j++) {
        if (this.piedras[i]!=this.piedras[j]) {
          if (colisionGenerica(this.piedras[i], this.piedras[j])) {
            this.piedras[i].x=random(0, 740);
          }
        }
      }
    }
    for (let i=0; i<this.piedras.length; i++) {
      for (let j=0; j<this.verduras.length; j++) {
        if (this.piedras[i]!=this.verduras[j]) {
          if (colisionGenerica(this.piedras[i], this.verduras[j])) {
            this.piedras[i].x=random(0, 740);
          }
        }
      }
    }
    for (let i=0; i<this.verduras.length; i++) {
      for (let j=0; j<this.verduras.length; j++) {
        if (this.verduras[i]!=this.verduras[j]) {
          if (colisionGenerica(this.verduras[i], this.verduras[j])) {
            this.verduras[i].x=random(0, 740);
          }
        }
      }
    }
  }


  DevolverPuntajeTrigo() {
    for (let i=0; i<this.verduras.length/2; i++) {
      if (this.verduras[i].cantidadT) {
        this.puntajeT++;
      }
    }
    return this.puntajeT;
  }

  DevolverPuntajeZanahoria() {
    for (let i=this.verduras.length/2; i<this.verduras.length; i++) {
      if (this.verduras[i].cantidadZ) {
        this.puntajeZ++;
      }
    }
    return this.puntajeZ;
  }


  keyApretado() {
    if (keyCode==LEFT_ARROW) {
      this.gato.movimiento(-6);
    }
    if (keyCode==RIGHT_ARROW) {
      this.gato.movimiento(6);
    }
  }

  keyLibre() {
    if (keyCode==LEFT_ARROW||keyCode==RIGHT_ARROW) {
      this.gato.movimiento(0);
    }
  }

  checkJuegoPerdido() {
    if (this.gato.checkMuerte()) {
      return true;
    } else {
      return false
    }
  }

  finDelJuego() {
    let resultado= true;
    if (this.tiempo>0) {
      resultado= false;
    }
    return resultado;
  }
}

function colisionGenerica(obj1, obj2) {
  return(obj1.x<obj2.x+obj2.ancho &&
    obj1.x+obj1.ancho>obj2.x &&
    obj1.y<obj2.y+obj2.altura &&
    obj1.y+obj1.altura>obj2.y);
}
