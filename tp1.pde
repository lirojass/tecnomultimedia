String pantalla;
int seg = 0;
int seg2=20;
PImage jungla1, Cam1, Cam2, Cam3, Cam4, p, p1, p2, p3, se, d, e, m, sa;
PFont f;
int posy = -50;
int posx = -280;
int posx1, posx2, posx3;
int posy1=100;
int r, g, b;
//int r2, g2, b2;
int a=0;
int a1, a2, a3, a4, a5;
int ts=0;
int h=0;
//int cr, cg, cb;
int gris1=0;
int gris2=0;

void setup() {
  //cr=round(random(0, 255));
  //cg=round(random(0, 255));
  //cb=round(random(0, 255));
  a1=0;
  a2=0;
  a3=0;
  a4=0;
  a5=0;
  posx1= 680;
  posx2= 720;
  posx3= 750;
  g=255;
  r=255;
  b=255;
  //g2=0;
  //r2=0;
  //b2=0;
  size(640, 480);
  pantalla = "menu";
  jungla1 = loadImage("jungla1.png");
  Cam1 = loadImage("Proyecto nuevo.png");
  Cam2 = loadImage("camaleon.jpg");
  Cam3 = loadImage("camaleon2.png");
  Cam4 = loadImage("camaleon3.jpg");
  p = loadImage("planisferio.png");
  p1 = loadImage("plan1.png");
  p2 = loadImage("plan2.png");
  p3 = loadImage("plan3.png");
  sa = loadImage("savana.jpg");
  se = loadImage("selva.jpg");
  d = loadImage("desierto.JPG");
  e = loadImage("estepa.jpg");
  m = loadImage("montañas.jpg");
  f = loadFont("Candara-30.vlw");
  textFont(f);
}

void draw() {
  colorMode(RGB);
  imageMode(CORNER);
  if (pantalla.equals("menu")) { // el menu
    boolean BotonDeInicio=(mouseX>=width/2 && mouseX<=width && mouseY>=height/2 && mouseY<=height);
    tint(255);
    textAlign(CENTER, CENTER);
    g=255;
    image(jungla1, 0, 0, 640, 480);
    fill(0);
    textSize(36);
    text("¡Hola Comisión 2!", width/2, posy);
    fill(255);
    text("Para empezar apreten el camaleon", posx, 200);
    if (posy<=120) {
      posy+=2;
    }
    if (120<=posy && posx<=width/2) {
      posx+=6;
    }
    if (width/2<=posx) {
      tint(r, g, b);
      if (BotonDeInicio==true) {
        r=0;
        b=0;
      } else {
        r=255;
        b=255;
      }
      image(Cam1, width/2, height/2, width/2, height/2);
    }
  }
  //pantalla 1
  if (pantalla.equals("p1")) {
    tint(255);
    textSize(30);
    image(Cam2, 0, 0, width, height);
    textAlign(LEFT, TOP);
    fill(255, a);
    text("Los camaleones son una familia de reptiles\nque consitituyen a 161 especies.", 20, 20);
    a+=3;
    if (a>=255 && millis()-seg>=6000) {
      imageMode(CORNERS);
      image(p, -400, 0, width, 600);
      noStroke();
      fill(255);
      rect(posx2-100, 70, 200, 36);
      rect(posx3-100, 120, 200, 36);
      fill(0);
      textAlign(CENTER);
      text("Se los puede encontrar en:", 180, posy);
      text("Africa", posx1, 50);
      text("Madagascar", posx2, 100);
      text("Y otros lugares", posx3, 150);
      if (posy<50) {
        posy+=6;
      } else {
        posy=50;
      }
      if (millis()-seg>=8000 ) {
        image(p1, -385, 47, 625, 617);
      }
      if (millis()-seg>=8000 && posx1>=430) {
        posx1-=30;
      }
      if (millis()-seg>=9000) {
        image(p2, -390, 42, 620, 612);
      }
      if (millis()-seg>=9000 && posx2>=460) {
        posx2-=30;
      }
      if (millis()-seg>=10000) {
        image(p3, -360, 52, 600, 622);
      }
      if (millis()-seg>=10000 && posx3>=480) {
        posx3-=30;
      }
      if (millis()-seg>=15000) {
        fill(0);
        pantalla="p2";
        posy=-50;
      }
    }
  } else if (pantalla.equals("p2")) {
    background(255);
    textAlign(CENTER);
    fill(0);
    text("Se los pueden encontrar\nen lugares forestales como:", width/2, posy);
    text("Pero tambien se pueden encontrar en:", posx, 310);
    if (posy<=80) {
      posy++;
    } else {
      fill(0, a1);
      a1+=15;
      tint(255,a1);
      image(se, 40, 180, 170, 100);
      text("Selvas", 130, 160);
    }
    if (millis()-seg>=18000) {
      fill(0, a2);
      a2+=15;
      tint(255,a2);
      image(sa, 230, 180, 170, 100);
      text("Savanas", 320, 160);
    }
    if (millis()-seg>=19000) {
      fill(0, a3);
      a3+=15;
      tint(255,a3);
      image(m, 420, 180, 170, 100);
      text("Montañas", 510, 160);
    }
    if (posx<=width/2 && millis()-seg>=20000) {
      posx+=6;
    }
    if (millis()-seg>=22000) {
      fill(0, a4);
      a4+=15;
      tint(255,a4);
      image(e, 105, 370, 170, 100);
      text("Estepas", 190, 350);
    }
    if (millis()-seg>=23000) {
      fill(0, a5);
      a5+=15;
      tint(255,a5);
      image(d, 355, 370, 170, 100);
      text("Desiertos", 440, 350);
    }
    if (millis()-seg>=25000) {
      pantalla="p3.1";
    }
  } else if (pantalla.equals("p3.1")) {
    fill(0, 255, 0);
    tint(255, 255, 255);
    image(jungla1, 0, 0, 640, 480);
    textSize(ts);
    text("Su caracteristica más conocida\nque los define es su", width/2, 70);
    if (ts<=30) {
      ts++;
    } else {
      colorMode(HSB);
      fill(h, 255, 255);
      text("color", 495, 105);
      tint(h, 255, 255);
      image(Cam3, 0, 100, 640, 380);
      h+=4;
      if (h>=255) {
        h=0;
      }
    }
    if (millis()-seg>=35000) {
      pantalla="final";
    }
  }
  /*if (pantalla.equals("p3.2")) {
   colorMode(RGB);
   tint(255);
   textSize(30);
   fill(0);
   background(255);
   image(Cam3,0,0,width,height);
   if (millis()-seg>=37000) {
   text("Ahora te doy algo para hacer opcional", width/2, 50);
   }
   if (millis()-seg>=39000) {
   textSize(20);
   text("Vas a tener un camaleon y un texto que lo acompaña, el camaleon\nva a ser de un color aleatorio y quiero que hagas el texto del mismo color\nantes de que se termine el tiempo", width/2, 100);
   }
   if (millis()-seg>=42000) {
   textSize(30);
   text("Podes incrementar el rojo con 'R',\nel verde con 'G' y el azul con 'B'\nY podes bajar sus valores presionando 'Control'\ncon la tecla del color que queres bajar", width/2, 200);
   }
   if (millis()-seg>=50000) {
   pantalla="p3.3";
   }
   }
   if (pantalla.equals("p3.3")) {
   int seg1=frameCount%60;
   textAlign(CENTER, CENTER);
   text(seg2, 100, 100);
   textSize(20);
   if (seg1==0) {
   seg2--;
   }
   tint(255, 255, 255);
   image(se, 0, 0, width, height);
   tint(cr, cg, cb);
   image(Cam3, 40, 150, 210, 150);
   fill(255);
   text("r:" + cr +" ,g:"+ cg +" ,b:" + cb, 150, 350);
   text("r:" + r2 +" ,g:"+ g2 +" ,b:" + b2, 450, 350);
   fill(r2, g2, b2);
   textSize(40);
   text("CAMALEON", 450, 250);
   fill(255);
   text(seg2, 100, 50);
   if (cr==r2 &&cg==g2 &&cb==b2) {
   text("GANASTE!", width/2, 420);
   }
   if (seg2<=0) {
   pantalla="final";
   }
   } */
  if (pantalla.equals("final")) {
    textAlign(CENTER, CENTER);
    tint(255);
    image(Cam4, 0, 0, width, height);
    fill(255);
    textSize(50);
    text("El fin", width/2, posy1);
    posy1+=2;
    if (posy1>=height) {
      posy1=0;
    }
    fill(0, 255, 0);
    rect(50, 400, 200, 50);
    fill(255, 0, 0);
    rect(390, 400, 200, 50);
    textSize(20);
    fill(gris1);
    text("Ir al menu", 150, 425);
    fill(gris2);
    text("Reiniciar", 490, 425);
    if (mouseX>=50 && mouseX<=250 && mouseY>=400 && mouseY<=450) {
      gris1=255;
    } else {
      gris1=0;
    }
    if (mouseX>=390 && mouseX<=590 && mouseY>=400 && mouseY<=450) {
      gris2=255;
    } else {
      gris2=0;
    }
  }
}

void mousePressed() {
  if (pantalla.equals("menu")) {
    boolean BotonDeInicio=(mouseX>=width/2 && mouseX<=width && mouseY>=height/2 && mouseY<=height);
    if (BotonDeInicio) {
      pantalla="p1";
      seg = millis();
      posy = -50;
      posx = -280;
    }
  }
  if (pantalla.equals("final")) {
    if (mouseX>=50 && mouseX<=250 && mouseY>=400 && mouseY<=450) {
      pantalla="menu";
      posy = -50;
      posx = -280;
      seg2=20;
      seg = millis();
      a1=0;
      a2=0;
      a3=0;
      a4=0;
      a5=0;
      posy1=100;
      posx1= 680;
      posx2= 720;
      posx3= 750;
      //cr=round(random(0, 255));
      //cg=round(random(0, 255));
      //cb=round(random(0, 255));
      //g2=0;
      //r2=0;
      //b2=0;
      a=0;
      ts=0;
    }
    if (mouseX>=390 && mouseX<=590 && mouseY>=400 && mouseY<=450) {
      pantalla="p1";
      seg2=20;
      posy = -50;
      posx = -280;
      seg = millis();
      a1=0;
      a2=0;
      a3=0;
      a4=0;
      a5=0;
      posy1=100;
      posx1= 680;
      posx2= 720;
      posx3= 750;
      //cr=round(random(0, 255));
      //cg=round(random(0, 255));
      //cb=round(random(0, 255));
      //g2=0;
      //r2=0;
      //b2=0;
      a=0;
      ts=0;
    }
  }
}

/*
void keyPressed() {
 if (pantalla.equals("p3.3")) {
 if ((key=='g'||key=='G')&& g2<=255) {
 g2++;
 }
 if ((key=='b'||key=='B')&& b2<=255) {
 b2++;
 }
 if ((key=='r'||key=='R')&& r2<=255) {
 r2++;
 }
 if ((int(key)==7)&& 0<=g2) {
 g2--;
 }
 if ((int(key)==2)&& 0<=b2) {
 b2--;
 }
 if ((int(key)==18)&& 0<=r2) {
 r2--;
 }
 }
 } */
