const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String},
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        default: '65003456dc94a6865b256d38'
    },
    },
    { timestamps: true }
);
  
const User = mongoose.model('User', userSchema);
module.exports = User;