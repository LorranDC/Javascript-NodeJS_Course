const { join } = require("core-js/core/array");

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generatesUpper = () => String.fromCharCode(rand(65, 91));
const generatesLower = () => String.fromCharCode(rand(97, 123));
const generatesNumber = () => String.fromCharCode(rand(48, 58));
const symbols = ',.;~^[]{}!@#$%¨&*()_+=-';
const generatesSymbol = () => symbols[rand(0, symbols.length)];

export default function generatesPassword(qty, uppercase, lowercase, numbers, symbols) {
    const passwordArray = [];
    qty = Number(qty);

    for(let i = 0; i < qty; i++){
        uppercase && passwordArray.push(generatesUpper());
        lowercase && passwordArray.push(generatesLower());
        numbers && passwordArray.push(generatesNumber());
        symbols && passwordArray.push(generatesSymbol());
    }
    return passwordArray,join('').slice(0, qty);
}





