import express from 'express'
const router = express.Router()

//get all
router.get('/', (req, res) => {
    res.send('hello world')
})

//get one
router.get('/:id', (req, res) => {
    
})

//create one
router.post('/', (req, res) => {
    
})

//update
router.patch('/', (req, res) => {
    
})

//delete
router.delete('/:id', (req, res) => {
    
})

export default router