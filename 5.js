const fs = require('fs')
const path = require('path')

const filterByExt = function(filename) {
  return path.extname(filename) === '.' + process.argv[3]
}

const onRead = function(err, list) {
  if(process.argv[3]) {
    list = list.filter(filterByExt)
  }
  for(file of list) {
    console.log(file)
  }
}

fs.readdir(process.argv[2], onRead)
