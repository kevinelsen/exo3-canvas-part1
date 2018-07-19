var cars = document.getElementById('canvas');
var ctx = cars.getContext('2d');

//Le toit de la voiture.
ctx.fillStyle = "#00a551";
ctx.fillRect(160,85,270,60);
ctx.fill();

//La carosserie.
ctx.fillStyle = "#00a551";
ctx.fillRect(103,145,390,80);
ctx.fill();

//Roue n°1.
ctx.beginPath();
ctx.arc(130,270,45,0,Math.PI*2,true);//(Placement horizontal,Placement vertical,Taille,Tour complet et le sens du tracé. )
ctx.strokeStyle = "##A0A0A0";
ctx.fillStyle = "#cdcdcd";
ctx.fill();
ctx.stroke();

//Roue n°2.
ctx.beginPath();
ctx.arc(470,270,45,0,Math.PI*2,true);//(Placement horizontal,Placement vertical,Taille,Tour complet et le sens du tracé. )
ctx.strokeStyle = "##A0A0A0";
ctx.fillStyle = "#cdcdcd";
ctx.fill();
ctx.stroke();
