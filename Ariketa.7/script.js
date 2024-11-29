// Celsiusetik Fahrenheitera bihurtzeko funtzioa
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Fahrenheitetik Celsiusera bihurtzeko funtzioa
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Bihurketa egitea aukeraren arabera
function bihurtu() {
    let bihurketaMota = document.getElementById('bihurketa').value;
    let tenperatura = parseFloat(document.getElementById('tenperatura').value);
    let emaitza = '';

    // Aukeraren arabera bihurketa egiteko
    if (isNaN(tenperatura)) {
        document.getElementById('emaitza').innerHTML = "Mesedez, sartu tenperatura baliodun zenbaki bat.";
        return;
    }

    if (bihurketaMota == '1') {
        // Celsius a Fahrenheit
        let fahrenheit = celsiusAFahrenheit(tenperatura);
        emaitza = `${tenperatura} gradu Celsius ${fahrenheit} gradu Fahrenheit dira.`;
    } else if (bihurketaMota == '2') {
        // Fahrenheit a Celsius
        let celsius = fahrenheitACelsius(tenperatura);
        emaitza = `${tenperatura} gradu Fahrenheit ${celsius.toFixed(2)} gradu Celsius dira.`;  // bi hamartar-toki
    }

    // Emaitza erakustea
    document.getElementById('emaitza').innerHTML = emaitza;
}
