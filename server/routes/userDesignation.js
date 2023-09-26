const express = require('express');
const router = express.Router();
const UserDesignation = require('../models/userDesignation'); 

// Create a new userDesignation
router.post('/userDesignations', async (req, res) => {
  try {
    const newUserDesignation = new UserDesignation(req.body);
    await newUserDesignation.save();
    res.status(201).json(newUserDesignation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all userDesignations
router.get('/userDesignations', async (req, res) => {
  try {
    const userDesignations = await UserDesignation.find( {"deleted": 0} );
    res.json(userDesignations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a userDesignation by ID
router.get('/userDesignations/:id', async (req, res) => {
  try {
    const userDesignation = await UserDesignation.findById(req.params.id);
    if (!userDesignation) throw new Error('UserDesignation not found');
    res.json(userDesignation);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update a userDesignation by ID
router.put('/userDesignations/:id', async (req, res) => {
  try {
    const userDesignation = await UserDesignation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!userDesignation) throw new Error('UserDesignation not found');
    res.json(userDesignation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a userDesignation by ID
router.put('/delete/userDesignations/:id', async (req, res) => {
  try {
    const userDesignation = await UserDesignation.findByIdAndDelete(req.params.id, { "deleted": 1 } , { new: true });
    if (!userDesignation) throw new Error('UserDesignation not found');
    res.json({ message: 'UserDesignation deleted successfully', userDesignation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
