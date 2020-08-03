
// const myModule = require('./myModule.js')
// const fs = require('fs')

// fs.readFile('story.txt', 'utf8',(err, data) => {
//     if (err) {
//         console.log('there was a problem reading data')
//     } else {
//         console.log(data)
//     }
// })

// console.log(myModule.beBasic())

// console.log('hello, world!')

// myModule.count()

// let i = 1
// const count = () => {
//     console.log(i)
//     i = i*2
// }

// constmyTimer = setInterval(count, 1000)

// const moment = require('moment');

// console.log(moment().format('MMM do YYYY'))

const moment = require('moment')
moment().set({'month': 6, 'year': 1997, 'date': 7})
console.log(moment().format('dddd [the] Do [of] MMMM [in the year] YYYY'))
