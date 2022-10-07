import { readFile, readFileSync }  from "fs"
import express from "express"
import { resolve } from "path"

import { MongoClient } from "mongodb" 
const dbname = 'mongo-test'
const url = 'mongodb://127.0.0.1:27017'
let resu = ''

    MongoClient.connect(url, {}, (error, client) => {
        if (error) console.log('cant connect to database');
        console.log('connection ok');
        const mdb = client.db(dbname)

         mdb.collection('users').find().toArray((error, results) => {
             //console.log(results[0]['name']);
             //resu = results[0]['name']
         })
         
    })


const app = express()

function getText() {
    let rfile = readFileSync('./data.txt', 'utf-8', (err, data) => {} )
    return rfile
}

async function getData() {
    // let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve("done!"), 1000)
    //   });
    let result = getText()  
    return result
}

app.get('/', (req, res) => {
    res.send('home')
})

app.get('/a', async function(req, res){
    resu = await getData()
    res.send(resu)
})

app.listen(3000, () => console.log('port is listening'))




        //  mdb.collection('users').insertOne({
        //      name: 'Zosia',
        //      age: 32
        //  })