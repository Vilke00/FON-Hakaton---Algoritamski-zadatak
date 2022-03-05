class Zadatak{

constructor(id){
	
	this.canvas = document.querySelector(id);
	this.context = canvas.getContext("2d");
}

obrnutiTrougao(a,b,c,brojac){


  let newA = [0,0];
  let newB = [0,0];
  let newC = [0,0];

  newA[0] = (c[0]+b[0])/2;
  newA[1] = b[1];
  newB[0] = (c[0]+3*b[0])/4;
  newB[1] = (a[1]+b[1])/2;
  newC[0] = (3*c[0]+b[0])/4;
  newC[1] = (a[1]+b[1])/2;

  this.triangle(newA,newB,newC,"#060606")
	brojac++;
	if (brojac <8) {
  this.obrnutiTrougao(a,newB,newC,brojac);
  this.obrnutiTrougao(newC,newA,c,brojac);
  this.obrnutiTrougao(newB,b,newA,brojac);

	}

}

drawTriangle(a,b,c) {
  this.triangle(a,b,c,"#FFCC00")
  this.obrnutiTrougao(a,b,c,0);


}
triangle(a,b,c,color){
	  this.context.beginPath();
  this.context.moveTo(b[0], b[1]); // B
  this.context.lineTo(c[0], c[1]);//C
  this.context.lineTo(a[0], a[1]);//A
  this.context.closePath();

  this.context.fillStyle = color;
  this.context.fill();
  this.context.closePath();
}
}