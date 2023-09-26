const express = require('express');
const router = express.Router();
const Customer = require("../models/customers")

// Create a new customer
router.post('/customers', async (req, res) => {
    try {
      const newCustomer = new Customer(req.body);
      await newCustomer.save();
      res.status(201).json(newCustomer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
// Get all customers
router.get('/customers', async (req, res) => {
  try {
    const customers = await Customer.find({ deleted: '0' });
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a customer by ID
router.get('/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) throw new Error('Customer not found');
    res.json(customer);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update a customer by ID
router.put('/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!customer) throw new Error('Customer not found');
    res.json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a customer by ID
router.put('/delete/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, {"deleted": 1}, { new:true });
    if (!customer) throw new Error('Customer not found');
    res.json({ message: 'Customer deleted successfully' ,customer});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

  
module.exports = router;