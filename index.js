import { readFile, readFileSync }  from "fs"
import express from "express"

const app = express()

async function getText() {
    let xd = await readFile('./data.txt', 'utf-8', (err, txt) => txt
    )
    console.log(xd);
}



app.get('/', (req, res) => {
    res.send('dupa')
})

app.get('/a', (req, res) => {
    res.send('hello you')
})

app.listen(3000, () => console.log('port is listening'))