const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  permission_id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  description: String,
  status: {
    type: String,
    required: true,
    enum: ['active', 'inactive', 'deleted']
  },
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
  deleted: { type: Number, default: 0, required: true },
  deleted_by: { type: Number, default: null },
  created_on: { type: Date, required: true },
  created_by: { type: Number, default: null },
  modified_on: { type: Date, default: null },
  modified_by: { type: Number, default: null },
  icon: String
});

const Permission = mongoose.model('Permission', permissionSchema);

module.exports = Permission;
