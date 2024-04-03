const fs = require('fs').promises;
const path = require('path');
const filePath = path.resolve(__dirname, '..', 'test.json');

const persons = [
{name:'Lorran'},
{name:'Maria'},
{name:'Luiz'},
{name:'Eduardo'}
];
const json = JSON.stringify(persons, '', 2);

fs.writeFile(filePath, json, {flag: 'w' });
