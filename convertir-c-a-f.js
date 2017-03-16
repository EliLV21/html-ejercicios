function convertirCelcius(){
    var farenhait= document.getElementById("farenhait").value;
    var grados = document.getElementById("celsius");
    var resultadoCelcius= parseInt((farenhait*1.8)+32);

 grados.value = resultadoCelcius;
}
function convertirFarenhait(){
    var celcius= document.getElementById("celsius").value;
    var grados = document.getElementById("farenhait");
    var resultadoFarenhait= parseInt((celcius-32)*1.8);

  grados.value = resultadoFarenhait;
}
