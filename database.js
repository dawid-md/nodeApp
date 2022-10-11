import { MongoClient } from "mongodb" 

export const mynum = 10;
//export const client = new MongoClient('mongodb://127.0.0.1:27017');
export const client = new MongoClient('mongodb+srv://dawid-md:Creative123@cluster0.tcxhaad.mongodb.net/test');
export const database = client.db('sample_analytics');
export async function getDatafromBase() {
    try {
        const users = database.collection('accounts');
        const query = { 'name': 'Johnny' };
        const user = await users.findOne(); //users.findOne(query);        
        return user['account_id'];
    } finally {
        // await client.close();      // Ensures that the client will close when you finish/error
    }
}

