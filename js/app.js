var codigoGenerado=document.getElementById("codigo-generado");
var codigoIngresado=document.getElementById("codigo-ingresado");
var recargar=document.getElementById("load");
var validando=document.getElementById("check");
caracteres = "0123456789ABCDEF'";
longitud = 8;

function generadorCodigo(caracteres, longitud){
codigo = "";
  for (var i=0; i < longitud; i++)
  {
    aleatorio = Math.floor(Math.random()*caracteres.length);
    codigo += caracteres.substr(aleatorio, 1);
  }
  return codigo;
}
codigoGenerado.setAttribute("value",generadorCodigo(caracteres, longitud));



function colorAleatorio(){

  var r = Math.round(Math.random()*255);
  var g = Math.round(Math.random()*255);
  var b = Math.round(Math.random()*255);

  var newColor="rgb("+r+", "+g+", "+b+")";

  codigoGenerado.setAttribute("style","color:" + newColor + ";");

}
colorAleatorio();

recargar.addEventListener("click",function(){
  location.reload();
});

validando.addEventListener("click",function(evento){
  evento.preventDefault();
    codigo=(codigoIngresado.value).toString();
    codigo=codigo.toUpperCase();

    if(codigoGenerado.value!=codigo){
      generadorCodigo(caracteres,longitud);
      codigoGenerado.setAttribute("value",generadorCodigo(caracteres, longitud));
      codigoIngresado.value="";
    }else{
      alert("Felicidades! código correcto :)")
    }
});
