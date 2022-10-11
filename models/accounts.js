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

export default mongoose.model('accountSchema', accountSchema)