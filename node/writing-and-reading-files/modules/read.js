const fs = require('fs').promises;

module.exports = (pathOfTheFile) => fs.readFile(pathOfTheFile, 'utf8');
