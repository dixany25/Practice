var menores = 0;
var adultos = 0;
var edadM = 0;
var edadA = 0;
var promM = 0;
var promA = 0;
var entradas = 0;
var i=0;


function aceptar(){
   if (entradas <= 2){
    alert ("Gracias por participar");
    var edad1= parseInt(document.getElementById('edad').value);
 if(edad1<=17){
    menores=menores+1;
    edadM = edadM + edad1;
 } else {
    adultos= adultos+1;
    edadA = edadA + edad1;
 }
 promM = edadM/menores;
 promA = edadA/adultos;
 document.getElementById('edad').value = "";
entradas++;
} else {
   alert("La encuesta se cerró");
   document.getElementById('aceptar').disabled = true;
   document.getElementById('edad').value = "";
}
}
 

function agregar(){
document.write("<h2><strong>Resultados<br></h2></strong>");
document.write("<p><strong>La cantidad de menores es: "+menores+"<br></p></strong>");
document.write("<p><strong>La cantidad de mayores es: "+ adultos+"<br></p></strong>");
document.write("<p><strong>La sumatoria de edades de menores es: "+edadM+"<br></p></strong>");
document.write("<p><strong>La sumatoria de edades de mayores es: "+ edadA+"<br></p></strong>");
document.write("<p><strong>El promedio de edades de menores es: "+promM+"<br></p></strong>");
document.write("<p><strong>El promedio de edades de mayores es: "+ promA+"<br></p></strong>");
if(menores>adultos){
   document.write("<p><strong><mark>Segun los resultados la sala que debemos cerrar es la de adulto</p></strong></mark>");
} else {
   document.write("<p><strong><mark>Segun los resultados la sala que debemos cerrar es la de menores</p></strong></mark>");  
}
}
