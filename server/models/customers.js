const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customer_id: { type: Number, unique: true, required: true },
  company_name: { type: String, required: true },
  address: String,
  email: { type: String, unique: true, required: true },
  country_id: Number,
  state_id: Number,
  city_id: Number,
  createddate: Date,
  deleted: { type: Number, default: 0 ,required: true },
  deleted_by: String,
  created_on: { type: Date, required: true },
  created_by: String,
  modified_on: Date,
  modified_by: String,
  encryption_key: { type: String, required: true },
  internal_sub_domain: { type: String, required: true },
  domain: { type: String, required: true },
  setup_status: { type: Number, required: true }
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
