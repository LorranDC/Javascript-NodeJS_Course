const pessoa1 = 
{
    nome:'Lorran',
    sobrenome:'Dias',
    idade: 18,

    fala()
    {
        console.log(`Minha idade atual é ${this.idade}`);
    },

    incrementaIdade()
    {
        this.idade++;
    } 
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

/*
function criaPessoa (nome, sobrenome, idade)
{
    return {
        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa('Lorran', 'Dias', 18);
const pessoa2 = criaPessoa('Lorran', 'Dias', 18);
const pessoa3 = criaPessoa('Lorran', 'Dias', 18);
const pessoa4 = criaPessoa('Lorran', 'Dias', 18);
*/

/*
const pessoa1 = {
    nome: 'Lorran',
    sobrenome: 'Dias',
    idade: 18
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/
