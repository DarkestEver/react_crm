const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  address: String,
  email: { type: String, unique: true, required: true },
  logo: { type: String },
  countryId: Number,
  stateId: Number,
  cityId: Number,
  deleted: { type: Number, default: 0 ,required: true },
  deletedBy: String,
  createdOn: { type: Date},
  createdBy: String,
  modifiedOn: Date,
  modifiedBy: String,
  encryptionKey: { type: String },
  internalSubDomain: { type: String, required: true },
  domain: { type: String, required: true },
  setupStatus: { type: String }
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
