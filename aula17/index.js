
/*
const raiz = function(n) //Functions inside of a variable or constant will be have ";" in the end
{
    return n ** 0.5;
};
*/

console.log(raiz(9));


//const raiz = n => n ** 0.5; //Arrow function pattern if it has only one line and only one parameter


const raiz = (n) => //Arrow function default pattern without simplifications
{
    return n ** 0.5;
};

console.log(raiz(9));

/*
function soma(x = 1, y = 1) //Default values
{
    const resultado = x + y;
    return resultado;
}

const resultado = soma();
console.log(resultado);
console.log(soma(2, 2));
*/

/*
function saudacao(nome)
{
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Lorran');
console.log(variavel);
*/