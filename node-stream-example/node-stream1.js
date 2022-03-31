const http = require('http');
const fs = require('fs');
console.log('test',process.argv, process.stdout)

if (process.argv.length !== 3) {
  console.log('file path required');
  process.exit(1)
}

const filepath = process.argv[2]

var readStream = fs.createReadStream(filepath)

readStream.on('data', (chunk) => {
  console.log(' ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
  console.log(' ▒ reading chunk...  ▒');
  console.log(' ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
  console.log(chunk.toString());
})