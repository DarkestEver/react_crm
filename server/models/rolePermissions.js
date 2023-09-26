const mongoose = require('mongoose');

const rolePermissionSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  role_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Role'},
  permission_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Permission'},
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
  deleted: { type: Number, default: 0,required: true },
  deleted_by: Number,
  created_on: { type: Date, required: true },
  created_by: Number,
  modified_on: Date,
  modified_by: Number
});

const RolePermission = mongoose.model('RolePermission', rolePermissionSchema);

module.exports = RolePermission;
