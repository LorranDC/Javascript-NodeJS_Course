let alunos = ['Luiz', 'Carlos', 'João'];

//delete alunos[1]; //Deletes the respective element of array without delete your index
console.log(typeof alunos);
console.log(alunos instanceof Array);
console.log(alunos);
console.log(alunos[50]); //Undefined (not exists)
alunos.push('Lorran');
alunos.push('Eduardo');
console.log(alunos);
console.log(alunos.slice(0, 3)); //Shows elements between index 0 and 3

/*
const removido = alunos.shift();
console.log(removido);
alunos.pop(); //Remove the last element of array
alunos.unshift('Lorran'); //Add element to the beginning of array
*/

/*
alunos.push('Lorran'); //Add element to the end of array
alunos[alunos.length] = 'Lorran'; //Add element to the end of array 
alunos[0] = 'Lorran'; //Edit element on specified index
*/



