void setup(){
  background(90);
  size(800,400);
  frameRate(60);
  colorMode(RGB);
  rectMode(CENTER);
  
 }
 
 void draw(){
 background(255);  
 noStroke();
 //cola
 fill(0);
 circle(250,320,100);
 //parte de atras del cuerpo
 fill(148, 83, 0);
 ellipse(300,280,200,200);
 //parte pricipal del cuerpo
 fill( 178, 100, 0 );
 ellipse(350,270,250,250);
 fill(255);
 ellipse(350,300,80,180);
 //parte de la cabeza
 ellipse(350,130,200,200);
 //las patas
 fill( 160, 120, 68 );
 ellipse(300,380,90,40);
 ellipse(420,380,90,40);
 fill( 231, 138, 19 );
 //la cabeza
 rect(350,100,190,150);
 fill(255, 215, 254);
 //orejas
 triangle(250,20,250,100,320,60);
 triangle(450,20,450,100,380,60);
 
 fill( 137, 87, 0 );
 rect(350,65,60,80);
 //nariz
 triangle(330,150,370,150,350,170);
 //ojos
 fill( 0, 116, 156 );
 circle(310,120,40);
 circle(390,120,40);
 fill(0);
 ellipse(310,120,15,18);
 ellipse(390,120,15,18);
 fill(255);
 stroke(255);
 strokeWeight(5);
 point(312,118);
 point(388,118);
 //boca
 stroke(0);
 strokeWeight(2);
 line(350,170,330,180);
 line(350,170,370,180);
 }
 
