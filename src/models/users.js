const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    uname: { type: String, required: true },
    psw: { type: String, required: true }
});

const Users = mongoose.model('users', UserSchema);

module.exports = Users