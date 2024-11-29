// Función para calcular los gastos totales
function calcularnumeros() {
    // Obtenemos los valores de los campos de entrada
    let zenbaki1 = parseFloat(document.getElementById('zenbaki1').value);
    let zenbaki2 = parseFloat(document.getElementById('zenbaki2').value);
    
    // Validamos si las entradas son números válidos
    if (isNaN(zenbaki1) || isNaN(zenbaki2) ) {
        document.getElementById('resultado').innerHTML = "Por favor, introduce valores válidos en todos los campos.";
        return;
    }

    let min = Math.min(zenbaki1, zenbaki2);
    let max = Math.max(zenbaki1, zenbaki2);


    let numeros = [];
    for (let i = min + 1; i < max; i++) {
        numeros.push(i);
    }
    

    // Mostramos el resultado
    document.getElementById('resultado').innerHTML = "Zure lehenengo zenbakia eta Bigarren zenbakien artean dauden zenbakiak:  " + numeros;
}
