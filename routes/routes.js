import express from 'express'
const router = express.Router()
import {digitSchema} from '../models/schemas.js'

//get all
router.get('/', async (req, res) => {
    try{
        let myaccounts = await digitSchema.find()
        res.render('home', { message: myaccounts })
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

//get one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//create one
router.post('/add', async (req, res) => {
    let newNumber = new digitSchema({
        value: req.body.value
    })
    try {
        let number = await newNumber.save()
        res.status(201).json(number)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//update
router.patch('/', (req, res) => {
})

//delete
router.delete('/:id', (req, res) => {
})

export {router}