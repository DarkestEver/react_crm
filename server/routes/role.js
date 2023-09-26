const express = require('express');
const router = express.Router();
const Role = require('../models/roles'); 

// Create a new role
router.post('/roles', async (req, res) => {
  try {
    const newRole = new Role(req.body);
    await newRole.save();
    res.status(201).json(newRole);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all roles
router.get('/roles', async (req, res) => {
  try {
    const roles = await Role.find({ "deleted": 0});
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a role by ID
router.get('/roles/:id', async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) throw new Error('Role not found');
    res.json(role);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update a role by ID
router.put('/roles/:id', async (req, res) => {
  try {
    const role = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!role) throw new Error('Role not found');
    res.json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a role by ID
router.put('/delete/roles/:id', async (req, res) => {
  try {
    const role = await Role.findByIdAndUpdate(req.params.id, {"deleted": 1} , { new: true });
    if (!role) throw new Error('Role not found');
    res.json({ message: 'Role deleted successfully', role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
