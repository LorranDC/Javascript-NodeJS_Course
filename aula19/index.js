//Primitive values

//Primitive (Immutable) - String, number, boolean, undefined, null (bigint, symbol) - Copied Value

//Reference (mutable) - Array, object, function - Passed by reference
const a = {
    firstName: 'Lorran',
    lastName: 'Dias',
};
const b = {...a};

a.name = 'João';
console.log(b);
/*
let a = [1, 2, 3]
let b =[...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Lorran');
console.log(a, c);
*/