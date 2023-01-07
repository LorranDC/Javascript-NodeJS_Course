const number = parseInt(prompt("Chose a number: "));
const yourNumber = document.getElementById('your-number');
const numberSquareRoot = document.getElementById('number-square-root');
const numberIsInteger = document.getElementById('number-is-integer');
const numberIsNaN = document.getElementById('number-is-nan');
const numberRoundDown = document.getElementById('number-floor');
const numberRoundUp = document.getElementById('number-ceil');
const numberDecimalPlaces = document.getElementById('number-two-decimal-places');

yourNumber.innerHTML = number;
numberSquareRoot.innerHTML = number ** 0.5;
numberIsInteger.innerHTML = Number.isInteger(number);
numberIsNaN.innerHTML = Number.isNaN(number);
numberRoundDown.innerHTML = Math.floor(number);
numberRoundUp.innerHTML = Math.ceil(number);
numberDecimalPlaces.innerHTML = number.toFixed(2);
