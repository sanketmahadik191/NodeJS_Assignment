const path = require('path');

// Joining directory path and file name to create a complete file path
const directoryPath = '/path/to/directory/lop';
const fileName = 'example.txt';
const filePath = path.join(directoryPath, fileName);
console.log(filePath);