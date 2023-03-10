const config = require('../config/config')
const mongoose = require('mongoose');
const logger = require('../config/logger');

let connection;

const connectMG = async () => {

    if (!connection) {
        connection = await mongoose.connect(config.MONGO_CONNECTION, { useNewUrlParser: true });
        console.log('Connected to MongoDB database');
    }
    return connection;
}

module.exports = { connectMG }