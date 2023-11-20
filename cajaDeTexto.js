class Texto{

  constructor(){
  }
  
  dibujar(texto, y=50 ,altura=200 ){
  push();
  fill(0,70);
  rect(50,y,700,altura);
  fill(255);
  textSize(20);
  text(texto,75,y+25,650,altura-50);
  pop();
  }
  
}
