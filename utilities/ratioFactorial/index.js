const ratioOfTwoNumbers = require('../ratio/index')
const factorialOfThirdNum = require('../factorial/index')

function ratioFactorial(a, b, c) {
  let objectA = {
    ratio: ratioOfTwoNumbers(a, b),
    factorial: factorialOfThirdNum(c),
  }
  return objectA
}

module.exports = ratioFactorial
console.log(ratioFactorial(2, 3, 4))
