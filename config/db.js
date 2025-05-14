const mongoose = require('mongoose');
const colors = require('colors');

const connectdb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database is successfully connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.log('Database is Not connected');
    }
}
module.exports = connectdb;