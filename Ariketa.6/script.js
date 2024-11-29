function calcularnumeros() {
    // Obtenemos los valores de los campos de entrada
    let zenbaki1 = parseFloat(document.getElementById('zenbaki1').value);
    let zenbaki2 = parseFloat(document.getElementById('zenbaki2').value);
    
    // Validamos si las entradas son números válidos
    if (isNaN(zenbaki1) || isNaN(zenbaki2)) {
        document.getElementById('resultado').innerHTML = "Por favor, introduce valores válidos en todos los campos.";
        return;
    }

    let min = Math.min(zenbaki1, zenbaki2);
    let max = Math.max(zenbaki1, zenbaki2);

    let numerosPrimos = [];
    
    // Función simple para verificar si un número es primo
    function esPrimo(numero) {
        if (numero <= 1) return false; // Los números menores o iguales a 1 no son primos
        for (let i = 2; i < numero; i++) { // Comprobamos desde 2 hasta el número-1
            if (numero % i === 0) return false; // Si es divisible, no es primo
        }
        return true; // Si no se encontró ningún divisor, es primo
    }

    // Generamos los números entre min y max y los verificamos si son primos
    for (let i = min + 1; i < max; i++) {
        if (esPrimo(i)) {
            numerosPrimos.push(i);
        }
    }

    // Si no hay números primos entre los dos valores
    if (numerosPrimos.length === 0) {
        document.getElementById('resultado').innerHTML = "No hay números primos entre " + zenbaki1 + " y " + zenbaki2 + ".";
    } else {
        // Mostramos los números primos encontrados
        document.getElementById('resultado').innerHTML = "Los números primos entre " + zenbaki1 + " y " + zenbaki2 + " son: " + numerosPrimos.join(', ');
    }
}
