let oneEuroIs = {
    "JPY": 156.5,   // Yen japonés
    "USD": 1.07,    // Dólar estadounidense
    "GBP": 0.87     // Libra esterlina
};

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}

function fromYenToPound(yens) {
    let euros = yens / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
