

//https://youtu.be/NlTdk_zSp3Y


PImage ref;
float cant;
int h1;
int h2;
int seg;
boolean debug=false;

void setup() {
  size(800, 400);
  ref= loadImage("tp2.png");
  setDefault();
  colorMode(HSB, 360, 100, 100);
  textAlign(CENTER, CENTER);
  textSize(20);
}

void draw() {
  background(350);
  image(ref, 0, 0, 400, 400);
  for (int x=0; x<cant*2; x++) {
    for (int y=0; y<cant*2; y++) {
      int xpos= round(map(x, 0, cant*2, 450, 750));
      int ypos= round(map(y, 0, cant*2, 50, 350));
      switch(2*(x%2)+y%2) {
      case 0:
        rectArribaIzquierda(xpos, ypos, h1, h2);
        break;
      case 1:
        rectAbajoIzquierda(xpos, ypos, h1, h2);
        break;
      case 2:
        rectArribaDerecha(xpos, ypos, h1, h2);
        break;
      case 3:
        rectAbajoDerecha(xpos, ypos, h1, h2);
        break;
      }
    }
  }
  if (debug==true) {
    cantidad();
  }
  if (millis()-seg>=4000) {
    debug=false;
  }
}

void mouseClicked() {
  if (mouseButton == LEFT) {
    cant++;
  } else if (mouseButton == RIGHT&& cant>1) {
    cant--;
  }
}

void keyPressed() {
  if (key=='r'|| key=='R') {
    setDefault();
  } else if (key=='c'|| key=='C') {
    debug=!debug;
    seg=millis();
  } else {
    h1=round(random(180, 360));
    h2=h1-180;
  }
}
