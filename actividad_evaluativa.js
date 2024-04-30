// Variables para el circulo ROJO
let cirX = 200;
let cirY = 100;
let dirX = 1;
let dirY = 1;

// Variables para el circulo AZUL
let cirX2 = 50;
let cirY2 = 50;
let dirX2 = 1;
let dirY2 = -1;

var velX = 7;
var velY = 7;

var velX2 = 4; 
var velY2 = 4;

var radio = 40;
var c;
var c2;


function setup() {
createCanvas(600,600);
c = color(255,0,0);
c2 = color(0,0,255);
}


function draw() {
  background(0);
  fill(c);
  ellipse(cirX, cirY, radio, radio);
  fill(c2);
  ellipse(cirX2, cirY2, radio, radio);
 

  //para que rebote en el piso
   if (cirY >= 580 || cirY <= 20) {
    //que cambie la dirección al tocar el techo o el piso
    dirY = dirY * -1;
  }

   if (cirY2 >= 580 || cirY2 <= 20) {
    //que cambie la dirección al tocar el techo o el piso
    dirY2 = dirY2 * -1;
  }
  
  
  
  
  //PELOTA ROJA CAMBIE DE COLOR TOCAR EL TECHO
   if (cirY <= 20){
     c = color(255, random(200), random(200));
   }
  //PELOTA AZUL CAMBIE DE COLOR AL TOCAR EL PISO
   if (cirY2 >= 580){
     c2 = color(random(200), random(200), 255);
   }
   
   
    
   
   
  //para que rebote en las paredes
  if (cirX >= 580 || cirX <= 20) {
    //Para que cambie la direccion hacia donde va la pelota
    dirX = dirX * -1;
  }
  

   if (cirX2 >= 580 || cirX2 <= 20) {
    //Para que cambie la direccion hacia donde va la pelota
    dirX2 = dirX2 * -1;
  }
  
  //hacemos que se mueva el circulo en el eje X e Y
    cirX = cirX + dirX * velX;
    cirY = cirY + dirY * velY;
  //pelota azul
    cirX2 = cirX2 + dirX2 * velX2;
    cirY2 = cirY2 + dirY2 * velY2;
    
    
    
}
