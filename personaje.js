class personaje {

  constructor() {
    this.x=width/2-30;
    this.y=height-150;
    this.ancho=60;
    this.altura=120;
    this.velocidad=0;
    this.colorDebug= color(200, 0, 0);
    this.invincibilidad=0;
    this.vidas = 3 ;
    this.blinking=false;
    this.timing=false;
    this.cooldown=0;
    this.timer=0;
    this.frames=0;
  }

  dibujar() {
    push();
    noStroke();
    if (this.timer-this.invincibilidad>this.cooldown) {
      this.blinking=false
    }
    if (this.blinking) {

      if (frameCount%10==0) {
        this.timing= !this.timing
      }
      if (this.timing) {
        this.colorDebug= color(200);
      } else {
        this.colorDebug= color(255);
      }
    } else {
      this.colorDebug= color(255);
    }
    tint(this.colorDebug);
    image(sprite[0][this.frames],this.x, this.y, this.ancho, this.altura);
    pop();
  }

  actualizarMovimiento() {
    this.timer++;
    this.x+=this.velocidad;
    if (this.x<0) {
      this.x=0;
    }
    if (this.x+this.ancho>width) {
      this.x=width-this.ancho;
    }
    if(frameCount%10==0){
    this.frames++;
    }
    if (this.frames>3) {
      this.frames=0;
    }
  }

  movimiento(v) {
    this.velocidad=v;
    return this.velocidad;
  }

  muerte() {

    if (this.timer-this.invincibilidad>this.cooldown) {
      this.vidas--;
      this.invincibilidad=this.timer;
      this.blinking=true;
      this.cooldown=180;
    }
  }

  checkMuerte() {
    let check;
    check = false;
    if (this.vidas<0) {
      check = true;
    }
    return check;
  }
}
