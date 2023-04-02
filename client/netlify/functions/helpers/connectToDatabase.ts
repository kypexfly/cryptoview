import mongoose from 'mongoose'

const uri = process.env.MONG_URI

async function connectToDatabase() {
  try {
    await mongoose.set('strictQuery', true).connect(uri);
    console.log('Connected to database');
  } catch (err) {
    console.error(err);
  }
}

export { connectToDatabase }