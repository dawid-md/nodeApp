import { readFile, readFileSync }  from "fs"
import express from "express"
import { resolve } from "path"
import { MongoClient } from "mongodb" 

const app = express()

const dbname = 'mongo-test'
const uri = 'mongodb://127.0.0.1:27017'
let resu = ''

const client = new MongoClient(uri);
const database = client.db(dbname);

async function getDatafromBase() {
    try {
      const users = database.collection('users');
      const query = { 'name': 'Johnny' };
      const user = await users.findOne(query);
      return user['sex']
    } finally {
      // await client.close();      // Ensures that the client will close when you finish/error
    }
  }

function getText() {
    let rfile = readFileSync('./data.txt', 'utf-8', (err, data) => {} )
    return rfile
}

async function getData() {
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

app.get('/b', async function(req, res){
    let sayu = await getDatafromBase()
    res.send(sayu)
})

app.listen(3000, () => console.log('..................'))




        //  mdb.collection('users').insertOne({
        //      name: 'Zosia',
        //      age: 32
        //  })

            // MongoClient.connect(url, {}, (error, client) => {
    //     if (error) console.log('cant connect to database');
    //     console.log('connection ok');
    //     const mdb = client.db(dbname)

    //     mdb.collection('users').find().toArray((error, result) => {
    //          //console.log(results[0]['name']);
    //          //resu = results[0]['name']
    //      })
    // })

    //run().catch(console.dir);