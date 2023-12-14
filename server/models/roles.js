const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  role_name: { type: String, required: true },
  description: String,
  deleted: { type: Number, default: 0 },
  can_delete: { type: Number, required: true },
  login_destination: { type: String, required: true },
  default_context: { type: String, required: true },
  deleted: { type: Number, required: true },
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
  deleted_by: { type: Number, default: null },
  created_on: { type: Date, required: true },
  created_by: { type: Number, default: null },
  modified_on: { type: Date, default: null },
  modified_by: { type: Number, default: null }
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
