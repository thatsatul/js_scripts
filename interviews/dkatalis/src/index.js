const filePath = process.argv[2];
const fileOperations = require('./fileOperations');

const consoleOutput = fileOperations.readFileData(filePath);
consoleOutput && consoleOutput.split('\n').forEach(val => console.log(val));
