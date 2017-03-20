const numbers =  process.argv
numbers.splice(0,2)
const sum = numbers.reduce((acc, val) => {
  return acc + +val
}, 0)
console.log(sum)
