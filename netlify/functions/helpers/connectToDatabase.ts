import { MongoClient } from 'mongodb'

const uri = process.env.MONG_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB!');
    return client.db('app');
  } catch (err) {
    console.log('Failed to connect to MongoDB', err);
    return null;
  }
}

export {connectToDatabase}