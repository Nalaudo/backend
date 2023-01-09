const mongoose = require('mongoose');

const connectMG = async () => {
    try {
        await mongoose.connect('mongodb+srv://Backend:Backend@backend.ep2dbvq.mongodb.net/ecommerce', { useNewUrlParser: true });
    } catch (error) {
        console.log(error);
        throw 'connectMG failed';
    }
}

module.exports = connectMG()