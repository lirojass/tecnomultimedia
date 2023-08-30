
function pelota() {
  circle(pelotaPosX, pelotaPosY, pelotaTamaño);
  if (!pausa) {
    pelotaPosX+=(pelotaVelX*multiplicador);
    pelotaPosY+=(pelotaVelY*multiplicador);
  }
  if (colisionX(raquetaPosX, raquetaPosY, raquetaTamaño) && pelotaVelY>0) {
    pelotaVelX=(velocidadRaqueta( raquetaPosX, raquetaPosY, raquetaTamaño))*-1;
    pelotaVelY*=-1;
  }
  if (pelotaPosX+pelotaTamaño/2>width||pelotaPosX-pelotaTamaño/2<0) {
    pelotaVelX*=-1;
  }
  if (pelotaPosY-pelotaTamaño/2<0) {
    pelotaVelY*=-1;
  }
  if (pelotaPosY+pelotaTamaño/2>height) {
    vidaPerdida=true;
    pelotaPosX=390;
    pelotaPosY=400;
    tiempoEspera=millis();
    pelotaVelX=2;
    pelotaVelY=-2;
    multiplicador=1;
    cantidadOffset=cantidad;
    vidas--;
    puntaje-=1000;
  }
  if (cantidad-cantidadOffset>=10) {
    multiplicador=2;
  } else {
    multiplicador=1;
  }
}

function raqueta() {
  rect(raquetaPosX, raquetaPosY, raquetaTamaño, 20);
  if (!pausa) {
    if (keyIsPressed) {
      if (raquetaPosX>0) {
        if (keyIsDown(LEFT_ARROW)) {
          raquetaPosX-=6;
        }
      }
      if (raquetaPosX+raquetaTamaño<width) {
        if (keyIsDown(RIGHT_ARROW)) {
          raquetaPosX+=6;
        }
      }
    }
  }
}

function velocidadRaqueta( pos1, pos2, tamaño) {
  let resultado=2;
  for (let i=pos1; i<(pos1+tamaño); i++) {
    if (dist(i, pos2, pelotaPosX, pelotaPosY)<pelotaTamaño/2) {
      resultado= 2*map(i, pos1, pos1+tamaño, 1.5, -1.5);
    }
    if (dist(i, pos2, pelotaPosX, pelotaPosY)<pelotaTamaño/2) {
      break;
    }
  }
  return resultado;
}

function ladrillo( x, y, tamañoX, tamañoY, hue) {
  noStroke();
  fill(hue, 64, 255);
  triangle(x, y, x+tamañoX, y, x, y+tamañoY);
  fill(hue, 255, 64);
  triangle(x+tamañoX, y+tamañoY, x+tamañoX, y, x, y+tamañoY);
  fill(hue, 255, 255);
  rect(x+tamañoX/4, y+tamañoY/4, tamañoX/2, tamañoY/2);
  stroke(hue, 255, 255);
  line(x, y, x+tamañoX, y+tamañoY);
  line(x+tamañoX, y, x, y+tamañoY);
  if (colisionX(x, y, tamañoX)||colisionX(x, y+tamañoY, tamañoX)) {
    cantidad++;
    pelotaVelY*=-1;
    ladrilloCheck[x/tamañoX][(y-offset)/tamañoY]=false;
    puntaje+=(8-(y-offset)/tamañoY)*50;
  } else if (colisionY(x, y, tamañoY)||colisionY(x+tamañoX, y, tamañoY)) {
    cantidad++;
    pelotaVelX*=-1;
    ladrilloCheck[x/tamañoX][(y-offset)/tamañoY]=false;
    puntaje+=(8-(y-offset)/tamañoY)*50;
  }
}

function colisionX( pos1, pos2, tamaño) {
  let resultado=(1<0);
  for (let i=pos1; i<(pos1+tamaño); i++) {
    resultado= dist(i, pos2, pelotaPosX, pelotaPosY)<pelotaTamaño/2;
    if (resultado) {
      break;
    }
  }
  return resultado;
}

function colisionY( pos1, pos2, tamaño) {
  let resultado=(1<0);
  for (let i=pos2; i<(pos2+tamaño); i++) {
    resultado= dist(pos1, i, pelotaPosX, pelotaPosY)<pelotaTamaño/2;
    if (resultado) {
      break;
    }
  }
  return resultado;
}

function botonGenericoGrafico(x, y, tamañox, tamañoy, tamañoTexto, nombre) {
  push();
  textLeading(5);
  stroke(255);
  strokeWeight(5);
  if (botonGenericoDeteccion(x, y, tamañox, tamañoy)) {
    fill(255);
  } else {
    fill(0);
  }
  rect(x, y, tamañox, tamañoy);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(tamañoTexto);
  if (botonGenericoDeteccion(x, y, tamañox, tamañoy)) {
    fill(0);
  } else {
    fill(255);
  }
  text(nombre, x+tamañox/2, y+(tamañoy/2)-tamañoy/10);
  pop();
}

function botonGenericoDeteccion(x, y, tamañox, tamañoy) {
  return mouseX>x && mouseX<x+tamañox && mouseY>y && mouseY<y+tamañoy;
}
