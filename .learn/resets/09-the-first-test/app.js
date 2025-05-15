// app.js

// Objeto de conversión base
let oneEuroIs = {
    "JPY": 156.5,   // Yen japonés
    "USD": 1.07,    // Dólar estadounidense
    "GBP": 0.87     // Libra esterlina
};

// Función: Euro → Dólar
function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

// Función: Dólar → Yen
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}

// Función: Yen → Libra
function fromYenToPound(yens) {
    let euros = yens / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}

// Exportamos funciones
module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
