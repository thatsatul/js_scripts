const fs = require('fs');
const operations = require('./operations');

function readFileData(file) {
  let data = null;
  try {
    data = fs.readFileSync(file, {encoding:'utf8', flag:'r'});
    const inputs = data.split('\n');
    const finalRes = performOperations(inputs);
    return finalRes;
  } catch(e) {
    console.log(`File ${file} not found. Please provide proper input file`);
  }
}

function performOperations(commands) {
  let res = '';
  let count = 0;
  commands.forEach(command => {
    res += count > 0 ? '\n' + operations.checkOperations(command) : operations.checkOperations(command);
    count++;
  });
  return res;
}

module.exports = {
  readFileData
};
