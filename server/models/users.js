const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Role'},
  email: { type: String, unique: true, required: true },
  username: { type: String, required: true },
  password_hash: String,
  reset_hash: String,
  last_login: Date,
  last_ip: String,
  created_on: { type: Date, required: true },
  deleted: { type: Number, required: true },
  reset_by: Number,
  banned: { type: Number, required: true },
  ban_message: String,
  display_name: String,
  display_name_changed: String,
  timezone: String,
  language: String,
  active: Number,
  activate_hash: String,
  force_password_reset: Number,
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
  deleted_by: Number,
  created_by: Number,
  modified_on: Date,
  modified_by: Number,
  designation: String,
  profile_url: String,
  description: String,
  redirect_url: String,
  designation_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserDesignation'},
  json: String,
  theme_selected_template: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;