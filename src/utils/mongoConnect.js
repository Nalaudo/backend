import { MONGO_CONNECTION } from '../config/config.js';
import mongoose from 'mongoose';

let connection;

const connectMG = async () => {
    if (!connection) {
        connection = await mongoose.connect(MONGO_CONNECTION, { useNewUrlParser: true });
    }
    return connection;
}

export default connectMG;