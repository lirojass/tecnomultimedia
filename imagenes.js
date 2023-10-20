let imagenes = [];

function preload() {
  //fuente= loadFont("Cambria-Font-For-Windows.ttf");
  imagenes[0]=[];
  for (let i=0; i<4; i++) {
    imagenes[0][i]= loadImage("data/gato000"+i+".png");
  }
  imagenes[1]=[];
    imagenes[1][0]= loadImage("data/piedraTP5.png");
  imagenes[1][1]= loadImage("data/piedraTP51.png");
  imagenes[1][2]= loadImage("data/ZanahoriaTP5.png");
  imagenes[1][3]= loadImage("data/ZanahoriaIconoTP5.png");
  imagenes[1][4]= loadImage("data/trigoTP5.png");
  imagenes[1][5]= loadImage("data/trigoIconoTP5.png");
  imagenes[1][6]= loadImage("data/fondoTP5.png");
  imagenes[2]=[];
  for (let i=0; i<6; i++) {
    imagenes[2][i]= loadImage("data/corazon000"+i+".png");
  }
  imagenes[3]=[];
  imagenes[3][0]=loadImage("data/Perder.png");
  for (let i=1; i<5; i++) {
    imagenes[3][i]= loadImage("data/Final"+i+".png");
  }
}
