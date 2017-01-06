const calc = require('./calc') // lấy hàm tính toán

const numbersToAdd = [  
  3,
  4,
  10,
  2
]
 
const result = calc.sum(numbersToAdd)  // chạy hàm tính toán
console.log(`The result is: ${result}`)