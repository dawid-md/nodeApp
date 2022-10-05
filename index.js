import { readFile, readFileSync }  from "fs"
import express from "express"
import { resolve } from "path"

const app = express()

async function getText() {
    let rfile = readFileSync('./data.txt', 'utf-8', (err, data) => {} )
    return rfile
}

let xx = await getText()
console.log(xx);

app.get('/', (req, res) => {
    res.send('dupa')
})

app.get('/a', (req, res) => {
    res.send('hello you')
})

app.listen(3000, () => console.log('port is listening'))