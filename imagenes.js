let sprite = [];
let imagen = [];
let script = [];
let fuente;

function preload() {
  //fuente= loadFont("Cambria-Font-For-Windows.ttf");
  sprites();
  imagenes();
  for (let i = 0; i < 4; i++) {
    script[i] = []
  }
  script[0] = loadStrings("data/tp3diagolo0.txt");
  script[1] = loadStrings("data/tp3diagolo1.txt");
  script[2] = loadStrings("data/tp3diagolo2.txt");
  script[3] = loadStrings("data/tp3diagolo2.txt");
}

function sprites() {
  sprite[0] = [];
  for (let i = 0; i < 4; i++) {
    sprite[0][i] = loadImage("data/gato000" + i + ".png");
  }
  sprite[1] = [];
  sprite[1][0] = loadImage("data/piedraTP5.png");
  sprite[1][1] = loadImage("data/piedraTP51.png");
  sprite[1][2] = loadImage("data/ZanahoriaTP5.png");
  sprite[1][3] = loadImage("data/ZanahoriaIconoTP5.png");
  sprite[1][4] = loadImage("data/trigoTP5.png");
  sprite[1][5] = loadImage("data/trigoIconoTP5.png");
  sprite[1][6] = loadImage("data/fondoTP5.png");
  sprite[2] = [];
  for (let i = 0; i < 6; i++) {
    sprite[2][i] = loadImage("data/corazon000" + i + ".png");
  }
  sprite[3] = [];
  sprite[3][0] = loadImage("data/Perder.png");
  for (let i = 1; i < 5; i++) {
    sprite[3][i] = loadImage("data/Final" + i + ".png");
  }
}

function imagenes() {
  imagen[0] = [];
  for (let i = 0; i < 2; i++) {
    imagen[0][i] = loadImage("data/gatomenu000" + i + ".png");
  }
  imagen[1] = loadImage("data/pmenufondo.jpg");
  imagen[2] = loadImage("data/iniciofondo.png");
  for (let i = 3; i < 6; i++) {
    imagen[i] = [];
    for (let j = 0; j < 2; j++) {
      imagen[i][j] = loadImage("data/inicio" + (i - 2) + "000" + j + ".png");
    }
  }
  imagen[6] = loadImage("data/intro.png");
  imagen[7] = [];
  for (let i = 0; i < 2; i++) {
    imagen[7][i] = loadImage("data/intro000" + i + ".png");
  }
  imagen[8] = loadImage("data/Charla.png");
  imagen[9] = [];
  for (let i = 0; i < 2; i++) {
    imagen[9][i] = loadImage("data/Charla000" + i + ".png");
  }
  imagen[10] = [];
  imagen[11] = [];
  imagen[12] = [];
  imagen[13] = [];
  for (let i = 0; i < 2; i++) {
    imagen[10][i] = loadImage("data/bota000" + i + ".png");
    imagen[11][i] = loadImage("data/sombrero000" + i + ".png");
    imagen[12][i] = loadImage("data/setup000" + i + ".png");
    imagen[13][i] = loadImage("data/conejos000" + i + ".png");
  }
  for (let i = 1; i < 5; i++) {
    imagen[i + 13] = loadImage("data/Final" + i + ".png");
  }
  imagen[18] = loadImage("data/Perder.png");
  imagen[19] = loadImage("data/Perder2.png");
  imagen[20] = [];
  imagen[21] = [];
  for (let i = 0; i < 2; i++) {
    imagen[20][i] = loadImage("data/creditos000" + i + ".png");
  }
  for (let i = 0; i < 2; i++) {
    imagen[21][i] = loadImage("data/creditoss000" + i + ".png");
  }
  imagen[22]= loadImage("data/Llamadofondo.png");
  for(let i=23;i<34;i++){
    imagen[i]=[];
  }
  for (let i = 0; i < 2; i++) {
    imagen[23][i] = loadImage("data/Llamadodueño000" + i + ".png");
    for (let j = 0; j < 2; j++) {
      imagen[24+j][i] = loadImage("data/Llamadom"+j+"000" + i + ".png");
      imagen[26+j][i] = loadImage("data/Llamados"+j+"000" + i + ".png");
    }
    for (let j = 1; j < 6; j++) {
      imagen[27+j][i] = loadImage("data/gatocaza"+j+"000" + i + ".png");
    }
  }
  imagen[33][0] = loadImage("data/FinalMalo.png");
  imagen[33][1] = loadImage("data/FinalBueno.png");
  imagen[33][2] = loadImage("data/FinalVerdadero.png");
  imagen[33][3] = loadImage("data/FinalVerdadero.png");

}

class imagenMoviente {

  constructor(y, speed) {
    this.y = y;
    this.yNew=this.y;
    this.speed = speed;
    this.terminado = false;
  }

  dibujar(imagen) {
    image(imagen, 0, this.y, width, height);
  }

  actualizar() {
    if (this.y < 0) {
      this.y += this.speed;
    } else if (this.y > 0) {
      this.y -= this.speed;
    } else {
      this.terminado = true;
    }
  }

  checkTerminado() {
    return this.terminado;
  }

  reset(){
    this.y=this.yNew;
  }

}
