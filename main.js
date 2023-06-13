
function captura() {
    let numberUno = document.getElementById("uno").value;
    let numberDos = document.getElementById("dos").value; 
    suma = parseFloat(numberUno) + parseFloat(numberDos);
    resultado = suma;

    console.log(resultado);
    document.getElementById("insert-resultado").innerHTML = suma;
   

}

function restar() {
    let numberTres = document.getElementById("tres").value;
    let numberCuatro = document.getElementById("cuatro").value;

    resta = parseFloat(numberTres) - parseFloat(numberCuatro);
    resultado = resta;

    console.log(resultado);
    document.getElementById("insert-resultado-resta").innerHTML = resta;
    

}
function multiplicar() {
    let numberCinco = document.getElementById("cinco").value;
    let numberSeis = document.getElementById("seis").value;

    multiplicacion = parseFloat(numberCinco) * parseFloat(numberSeis);
    resultado = multiplicacion;

    console.log(resultado);
    document.getElementById("insert-resultado-multi").innerHTML = multiplicacion;
    

}
function dividir() {
    let numberSiete = document.getElementById("siete").value;
    let numberOcho = document.getElementById("ocho").value;

    division = parseFloat(numberSiete) / parseFloat(numberOcho);
    resultado = division;

    console.log(resultado);
    document.getElementById("insert-resultado-divi").innerHTML = division;
    


}