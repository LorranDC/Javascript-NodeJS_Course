import generatesPassword from './generators';

const generatedPassword = document.querySelector('.generated-password');
const charactersQty = document.querySelector('.characters-qty');
const chkUpper = document.querySelector('.chk-upper');
const chkLower = document.querySelector('.chk-lower');
const chkNumbers = document.querySelector('.chk-numbers');
const chkSymbols = document.querySelector('.chk-symbols');
const generatePassword = document.querySelector('.generates-password');

export default () => {
    generatePassword.addEventListener('click', () => {
       generatedPassword.innerHTML = generates(); 
    });   
};

function generates() {
    const password = generatesPassword(
        charactersQty.value,
        chkLower.checked,
        chkUpper.checked,
        chkNumbers.checked,
        chkSymbols.checked
    );

    return password || 'Nothing selected.';
}