const mongoose = require('mongoose');
const Data = require('./DataModels.js');
const dotenv = require('dotenv');
dotenv.config();

mongoose.set('strictQuery', true);

// connect to database
async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

async function toMongo(jsonData) {
    try {
        await Data.insertMany(jsonData);
        console.log(`Inserted '${jsonData["topic"]}' data successfully!`);
    } catch (err) {
        console.log(err);
    }
}

async function insertData(jsonData) {
    try {
        await connectDB();
        await toMongo(jsonData);
    } catch (err) {
        console.log(err);
    }
}

module.exports = insertData;