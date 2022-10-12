import express from 'express'
const router = express.Router()
import accountSchema from '../models/accounts.js'

//get all
router.get('/', async (req, res) => {
    try{
        let myaccounts = await accountSchema.find()
        //let messagea = json(myaccounts)
        res.render('home', { message: myaccounts })

    } catch(err){
        res.status(500).json({message: err.message})
    }
    //
})

//get one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//create one
router.post('/add', async (req, res) => {
    let createdAccount = new accountSchema({
        account_id: req.body.account_id,
        limit: req.body.limit
    })
    try {
        let newaccount = await createdAccount.save()
        res.status(201).json(newaccount)
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

export default router