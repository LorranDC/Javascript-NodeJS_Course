const fs = require('fs').promises;

module.exports = (pathOfTheFile, data) => {
fs.writeFile(pathOfTheFile, data, {flag: 'w' , encoding: 'utf8'});
};