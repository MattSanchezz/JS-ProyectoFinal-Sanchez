function convertir(){
    var valore = parseInt (document.getElementById("valor").value);
    var resultado = 0;
    var Dolar = 380;
    var Euro = 410;
    var Real = 78;
    var Uruguayo = 9;
    var Chileno = 0.048;
    var Libra = 460;
    var Guaranies = 0.052;
    var Soles = 100;
    if (document.getElementById("uno").checked){
        resultado = valore / Dolar;
        alert("El cambio de Pesos a Dolares es: $ " + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / Euro;
        alert("El cambio de Pesos a Euros es: $ " + resultado.toFixed(2));
    }
    else if (document.getElementById("cuatro").checked){
        resultado = valore / Uruguayo;
        alert("El cambio de Pesos a Pesos Uruguayos es: $ " + resultado.toFixed(2));
    }
    else if (document.getElementById("cinco").checked){
        resultado = valore / Chileno;
        alert("El cambio de Pesos a Pesos Chilenos es: $ " + resultado.toFixed(2));
    }
    else if (document.getElementById("seis").checked){
        resultado = valore / Libras;
        alert("El cambio de Pesos a Libras es: $ " + resultado.toFixed(2));
    }
    else if (document.getElementById("tres").checked){
        resultado = valore / Real;
        alert("El cambio de Pesos a Reales es: $ " + resultado.toFixed(2));
    }
    else if (document.getElementById("siete").checked){
        resultado = valore / Guaranies;
        alert("El cambio de Pesos a Guaranies es: $ " + resultado.toFixed(2));
    }
    else if (document.getElementById("ocho").checked){
        resultado = valore / Soles;
        alert("El cambio de Pesos a Soles es: $ " + resultado.toFixed(2));
    }
    else{
        alert("Debe completar los campos para continuar")
    }
}