let nombre = prompt ("Ingrese su Nombre")
console.log(nombre);

alert (`Hola ${nombre}, bienvenido a CotizaTranqui`);

const divisa = [
    {nombre: "Dolar", precio: 380},
    {nombre: "Euro", precio: 405},
    {nombre: "Real", precio: 76},
    {nombre: "Peso uruguayo", precio: 9},
    {nombre: "Peso chileno", precio: 0.048},
    {nombre: "Libras", precio: 460},
    {nombre: "Guaranies", precio: 0.052},
    {nombre: "Soles", precio: 100},
];

let seleccion = prompt ("¿Desea realizar un cambio de divisa?. si/no")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt ("¿Desea realizar un cambio de divisa?. si/no")
}

if (seleccion == "si"){
    alert("Estas son las divisas disponibles y sus respectivos precios en Pesos Argentinos")
    let todaslasDivisas = divisa.map((divisa) => divisa.nombre + " " + "$" + divisa.precio );
    alert(todaslasDivisas.join(" - "))
}else if (seleccion == "no"){
    alert(`Fin del sistema`)
}

while(seleccion != "no"){
    let divisa = prompt("Elija la divisa a comprar")

if(divisa == "Dolar" || divisa == "Euro" || divisa == "Real" || divisa == "Peso uruguayo" || divisa == "Peso chileno" || divisa == "Libras" || divisa == "Guaranies" || divisa == "Soles"){
    switch(divisa){
        case "Dolar":
        precio = 380;
        break
        case "Euro":
        precio = 405;
        break
        case "Real":
        precio = 76;
        break
        case "Peso uruguayo":
        precio = 9;
        break
        case "Peso chileno":
        precio = 0.048;
        break
        case "Libras":
        precio = 460;
        break
        case "Guaranies":
        precio = 0.052;
        break
        case "Soles":
        precio = 100;
        break
    }

    let cantidad = parseInt(prompt("¿Cuanto desea comprar?"))
    console.log (cantidad)
    const total = (precio * cantidad)
    console.log (total)
    alert (`Se necesita ${total} pesos argentinos para la compra`)
}
    else{
    alert("No tenemos esa divisa")
    }
}