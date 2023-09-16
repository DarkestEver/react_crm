const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    role: {
        type: String,
    },
    permission: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Permission'
    }],
    },
    { timestamps: true }
);
  
  
const Role = mongoose.model('Role', roleSchema);

module.exports = Role;