document.getElementById("nn1").addEventListener("click", mostrarEjercicio);
document.getElementById("nn2").addEventListener("click", mostrarEjercicio2);
document.getElementById("tablita").addEventListener("click", generarTablaHTML);


// Ejecicio 1

function convertirCelsiusAFahrenheit(temperatura) {
    return (temperatura * 1.8) + 32;
}

function mostrarEjercicio() {
    let laTemperatura = Number(document.querySelector("#num1").value);
    let temperaturaEnFahrenheit = convertirCelsiusAFahrenheit(laTemperatura);
    // console.log(temperaturaEnFahrenheit)

    let mensaje;
    if (temperaturaEnFahrenheit) {

        if (temperaturaEnFahrenheit > 212) {
            mensaje = "Punto de ebullición del agua";
        } if (temperaturaEnFahrenheit >= 98.6 && temperaturaEnFahrenheit <= 212) {
            mensaje = "Temperatura del cuerpo humano";
        } if (temperaturaEnFahrenheit >= 77 && temperaturaEnFahrenheit < 98.6) {
            mensaje = "Temperatura hambiente";
        } if (temperaturaEnFahrenheit >= 32 && temperaturaEnFahrenheit < 77) {
            mensaje = "Punto de congelacion del agua";
        } if (temperaturaEnFahrenheit >= -459.58 && temperaturaEnFahrenheit < 32) {
            mensaje = "cero absoluto";
        }
        document.querySelector("#resultado").innerHTML = mensaje;
    }
}
// Ejercicio 2
function mostrarEjercicio2() {
    let Porcentaje = Number(document.querySelector('#num2').value);
    let valor = calcularPorcentajes(Porcentaje);

    document.querySelector("#resultado2").innerHTML = valor

}


function calcularPorcentajes(Porcentaje) {
    let resultado = 0



    if (Porcentaje) {

        if (Porcentaje < 500) {

            let valor_porcentajes = (50 * Porcentaje) / (100)
            resultado = Porcentaje + valor_porcentajes;
        }


        if (Porcentaje > 500) {
            let valor_porcentajes = (7 * Porcentaje) / (100)
            resultado = Porcentaje - valor_porcentajes
            console.log(valor_porcentajes)
        }

        return resultado;
        document.querySelector("#resultado2").innerHTML = mensaje;
    }
}
// Ejercicio 3

function generarTablaHTML() {
    let cantidad_filas = Number(document.querySelector("#cajon_1").value);
    let cantidad_columnas = Number(document.querySelector("#cajon_2").value);
    let cantidad_calculada = cantidad_filas * cantidad_columnas;
    let html_tabla="<table border>";

    for (fila = 0; fila < cantidad_filas; fila++) {
        html_tabla+="<tr>"
        for (columna = 0; columna < cantidad_columnas; columna++) {
        html_tabla+="<td>"

        html_tabla+=""+cantidad_calculada

            cantidad_calculada--;
        html_tabla+="</td>"
            
        }
        html_tabla+="</tr>"

    }
    html_tabla+="</table>"
    console.log(html_tabla)

    document.querySelector("#resultado3").innerHTML = html_tabla;


}