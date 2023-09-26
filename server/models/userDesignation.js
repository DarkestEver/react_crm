const mongoose = require('mongoose');

const userDesignationSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  designation: { type: String, required: true },
  points: { type: Number, required: true },
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
  created_by: { type: Number, required: true },
  created_on: { type: Date, required: true },
  modified_on: Date,
  modified_by: Number,
  deleted: { type: Number,default: 0, required: true },
  deleted_by: Number
});

const UserDesignation = mongoose.model('UserDesignation', userDesignationSchema);

module.exports = UserDesignation;
