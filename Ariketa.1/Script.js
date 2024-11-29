// Función para calcular los gastos totales
function calcularGastos() {
    // Obtenemos los valores de los campos de entrada
    let ostatu = parseFloat(document.getElementById('ostatu').value);
    let elikadura = parseFloat(document.getElementById('elikadura').value);
    let entretenimendu = parseFloat(document.getElementById('entretenimendu').value);

    // Validamos si las entradas son números válidos
    if (isNaN(ostatu) || isNaN(elikadura) || isNaN(entretenimendu)) {
        document.getElementById('resultado').innerHTML = "Por favor, introduce valores válidos en todos los campos.";
        return;
    }

    // Calculamos el costo total
    let costoTotal = ostatu + elikadura + entretenimendu;

    // Mostramos el resultado
    document.getElementById('resultado').innerHTML = "El costo total de la viaje es: " + costoTotal + " €";
}
