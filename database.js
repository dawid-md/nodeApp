import { MongoClient } from "mongodb" 

export const mynum = 10;
export const client = new MongoClient('mongodb://127.0.0.1:27017');
export const database = client.db('mongo-test');
export async function getDatafromBase() {
    try {
        const users = database.collection('users');
        const query = { 'name': 'Johnny' };
        const user = await users.findOne(); //users.findOne(query);        
        return user['sex'];
    } finally {
        // await client.close();      // Ensures that the client will close when you finish/error
    }
}

