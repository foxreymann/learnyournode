const fs = require('fs')

const onRead = function(err, fileBuffer) {
  to_string = fileBuffer.toString()
  split_lines = to_string.split("\n")
  console.log(split_lines.length-1)
}

filePath = process.argv[2]
fs.readFile(filePath, onRead)
