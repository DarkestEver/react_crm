const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
    permissions: { type: String },
    },
    { timestamps: true }
);
  
  
const Permission = mongoose.model('Permission', permissionSchema);

module.exports = Permission;