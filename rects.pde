void rectArribaIzquierda(int x, int y, int h1, int h2) {
  pushStyle();
  noStroke();
  for (int i = 0; i < 13; i++) {
    switch(i%4) {
    case 0:
      fill(0);
      break;
    case 1:
      fill(h1, 100, 100);
      break;
    case 2:
      fill(360);
      break;
    case 3:
      fill(h2, 100, 100);
      break;
    }
    float size=map(1, 0, cant*2, 0, 20);
    square(x+i*size, y+i*size, 300*(size/20)-i*size);
  }
  popStyle();
}

void rectArribaDerecha(int x, int y, int h1, int h2) {
  pushStyle();
  noStroke();
  for (int i = 0; i < 13; i++) {
    switch(i%4) {
    case 0:
      fill(360);
      break;
    case 1:
      fill(h1, 100, 100);
      break;
    case 2:
      fill(0);
      break;
    case 3:
      fill(h2, 100, 100);
      break;
    }
    float size=map(1, 0, cant*2, 0, 20);
    square(x, y+i*size, 300*(size/20)-i*size);
  }
  popStyle();
}

void rectAbajoIzquierda(int x, int y, int h1, int h2) {
  pushStyle();
  noStroke();
  for (int i = 0; i < 13; i++) {
    switch(i%4) {
    case 0:
      fill(360);
      break;
    case 1:
      fill(h1, 100, 100);
      break;
    case 2:
      fill(0);
      break;
    case 3:
      fill(h2, 100, 100);
      break;
    }
    float size=map(1, 0, cant*2, 0, 20);
    square(x+i*size, y, 300*(size/20)-i*size);
  }
  popStyle();
}

void rectAbajoDerecha(int x, int y, int h1, int h2) {
  pushStyle();
  noStroke();
  for (int i = 0; i < 13; i++) {
    switch(i%4) {
    case 0:
      fill(0);
      break;
    case 1:
      fill(h1, 100, 100);
      break;
    case 2:
      fill(360);
      break;
    case 3:
      fill(h2, 100, 100);
      break;
    }
    float size=map(1, 0, cant*2, 0, 20);
    square(x, y, 300*(size/20)-i*size);
  }
  popStyle();
}
