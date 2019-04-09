const fs = require('fs')
const path = require('path')
const http = require('http')
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
// const math = require('mathjs')

// const PORT = process.env.PORT || 5000

// let file = path.join(__dirname, 'hello.txt')

// //create and write to file
// if (!fs.existsSync(file)) {
//   let input = []
//   for (let i = 1; i < Math.pow(10, 9); i++) {
//     let number = i.toString()
//     if (number.includes('4')) {
//       input.push(parseInt(number))
//     }
//   }
//   fs.writeFile(file, input, err => {
//     if (err) throw err;
//     console.log('file written to..')
//   })
// }

// //read file
// let thisOne = fs.readFile(file, 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('couldnt read ' + file, err)
// })
// math.config({
//   number: 'BigNumber',
//   precision: 1000
// })


let firstInput = false
let input = 0
let x = 1
rl.on('line', (line) => {
  let a = 0
  let b = 0
  if (firstInput) {
    let origInput = parseInt(line)
    let numToChar = line
    numToChar = numToChar.replace(/4/g, '3')
    a = parseInt(numToChar)
    b = origInput - a
    console.log(`Case #${x}: ${a} ${b}`)
    if (x == input) {
      rl.close()
      process.exit(0)
    }
    x++
  } else {
    firstInput = true
    input = parseInt(line)
  }
})

// server.listen(PORT, () => console.log(`server is running on port ${PORT}`))