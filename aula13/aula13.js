//               01234567
let umaString = "Um texto";
let umaString2 = "O rato roeu a roupa do rei de Roma";

console.log(umaString[1]); //Exibe elemento do índice
console.log(umaString.charAt(6)); //Exibe o caractere localizado no índice determinado do Array
console.log(umaString.indexOf('texto')); //Exibe a localização do índice do primeiro elemento de uma determinada palavra dentro do Array
console.log(umaString.lastIndexOf('o', 3)); //Exibe a posição do índice de um determinado elemento em relação ao elemento determinado
console.log(umaString.match(/[a-z]/g)); //
console.log(umaString.search(/x/)); //
console.log(umaString.replace('Um', 'Outra')); //
console.log(umaString.replace(/Um/, 'Outra')); //
console.log(umaString2.replace(/r/g, '#')); //Substitui o elemento do Array através de expressões regulares (flag 'g' captura todos os elementos do Array)
console.log(umaString.concat(' em', ' um', ' lindo dia.')); //
console.log(umaString + ' em um lindo dia.'); //
console.log(`${umaString} em um lindo dia.`); //
console.log(umaString2.slice(-5, -1)); //
console.log(umaString2.substring(umaString2.length -5, umaString2.length -1));
console.log(umaString2.split(' '));