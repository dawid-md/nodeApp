import express from 'express'
import { client, database, getDatafromBase } from './database.js'

const app = express()
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
    res.send('home')
})

app.get('/a', async function(req, res){
    let sayu = await getDatafromBase()
    res.render('index', {
        userNumber: sayu
    })
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


    //import { readFile, readFileSync }  from "fs"
    // function getText() {
    //     let rfile = readFileSync('./data.txt', 'utf-8', (err, data) => {} )
    //     return rfile
    // }