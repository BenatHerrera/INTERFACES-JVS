// Función para calcular los gastos totales
function calcularGMI() {
    
    let kilo = parseFloat(document.getElementById('kilo').value);
    let altuera = parseFloat(document.getElementById('altuera').value);
    
  // Validamos si las entradas son números válidos
    if (isNaN(kilo) || isNaN(altuera)) {
        document.getElementById('resultado').innerHTML = "Por favor, introduce valores válidos en todos los campos.";
        return;
    }
  

    // Calculamos el costo total
    let GMI = (kilo / altuera^ 2);

    // Mostramos el resultado
    document.getElementById('resultado').innerHTML = "Con tu peso de " + kilo+ " y tu altura de "+ altuera + " tienes un GMI de : " + GMI;
}
