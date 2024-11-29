// Función para calcular los gastos totales
function calculardescuento() {
    
    let produktua = parseFloat(document.getElementById('produktua').value);
    let deskontua = parseFloat(document.getElementById('deskontua').value);
    

    // Validamos si las entradas son números válidos
    if (isNaN(produktua) || isNaN(deskontua) ) {
        document.getElementById('resultado').innerHTML = "Por favor, introduce valores válidos en todos los campos.";
        return;
    }

    // Calculamos el costo total
    let descuentototal = (produktua * deskontua ) / 100;

    // Mostramos el resultado
    document.getElementById('resultado').innerHTML = "Zure produktuaren Prezio FInala: " + descuentototal + " € da.";
}
