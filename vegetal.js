class vegetal {

  constructor(x, y, tipo) {
    this.x=x;
    this.y=y;
    this.ancho=60;
    this.altura=60;
    this.tipo = tipo;
    this.cantidadT=false;
    this.cantidadZ=false;
  }

  dibujar() {
    push();
    noStroke();
    switch(this.tipo) {
    case "trigo":
      image(imagenes[1][4],this.x, this.y, this.ancho, this.altura);
      break;
    case "zanahoria":
      image(imagenes[1][2],this.x, this.y, this.ancho, this.altura);
      break;
    }
    pop()
  }

  actualizar(valor, personaje, vegetal) {
    this.y+=valor;
    
    if(colisionGenerica(personaje, vegetal)){
      switch(this.tipo) {
      case "trigo":
        this.cantidadT=true;
        break;
      case "zanahoria":
        this.cantidadZ=true;
        break;
      }
    }else{
    this.cantidadT=false;
    this.cantidadZ=false;
    }
    if (this.y>=900||colisionGenerica(personaje, vegetal)) {
      this.x=round(random(0, 10))*74;
      this.y=random(-2000, -1000);
    }
  }
  
  cantidadTrigo(){
  return this.cantidadT;
  }
  
  cantidadZanahorias(){
  return this.cantidadZ;
  }
  
}
