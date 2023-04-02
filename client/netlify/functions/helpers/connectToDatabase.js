const mongoose = require('mongoose');

const uri = process.env.MONG_URI

async function connectToDatabase() {
  try {
    await mongoose.set('strictQuery', true).connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to database');
  } catch (err) {
    console.error(err);
  }
}

export { connectToDatabase }