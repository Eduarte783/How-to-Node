/*const http = require('http');
const { listenerCount } = require('process');
http.createServer((req, res) => {
    res.write('Hello World')
    res.end()
}); listen(8000)


let i = 0
const count = () => {
    console.log(i)
    i++
}

const myTimer = setInterval(count, 1000)

//ALWAYS Start with the package the you are using in this syntax //
const dayjs = require('dayjs')

console.log(dayjs())

console.log(dayjs().format('MMM-DD-YYYY')
*/

const colors = require('colors');

colors.setTheme({
    custom: ['red', 'underline']
})

console.log("Hello World!" .custom);