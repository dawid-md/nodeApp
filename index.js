import express from 'express'
//import { client, database, getDatafromBase } from './database.js'
import mongoose from 'mongoose'
const app = express()

mongoose.connect('mongodb+srv://dawid-md:Creative123@cluster0.tcxhaad.mongodb.net/sample_analytics')
const db = mongoose.connection
db.useDb('accounts')
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to database'))
app.use(express.json())

import router from './routes/routes.js'
app.use('/routes', router)

app.listen(3000, () => console.log('..................'))





















// app.set('view engine', 'hbs')

// app.get('/', (req, res) => {
//     res.send('home')
// })

// app.get('/a', async function(req, res){
//     let sayu = await getDatafromBase()
//     res.render('index', {
//         userNumber: sayu
//     })
// })

























// app.post('/clicked', (req, res) => {
//     let name = 'dominika'
//     console.log(name);
//     //console.log(database);
  
//     database.collection('users').save(click, (err, result) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log('click added to db');
//       res.sendStatus(201);
//     });
//   });




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