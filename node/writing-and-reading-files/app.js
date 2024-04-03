const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');

// const persons = [
// {name:'Lorran'},
// {name:'Maria'},
// {name:'Luiz'},
// {name:'Eduardo'}
// ];
// const json = JSON.stringify(persons, '', 2);
// write(filePath, json); 

async function readsFile(pathOfTheFile) {
    const data = read(pathOfTheFile);
     rendersData(data);
}

function rendersData(data) {
    data = JSON.parse(data);
    data.forEach(val => console.log(val.name));
}
readsFile(filePath);