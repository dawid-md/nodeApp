import mongoose from 'mongoose'
const accountSchema = new mongoose.Schema({
    account_id: {
        type: String,
        required: true
    },
    limit: {
        type: String
    },
    products: {
        type: Array
    }
})

const digitSch = new mongoose.Schema({
    value: {
        type: Number,
        required: true
    }
})


export const digitSchema = mongoose.model('digits', digitSch)   //pierwszy parametr to nazwa kolekcji
