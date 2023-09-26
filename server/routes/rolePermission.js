const express = require('express');
const router = express.Router();
const RolePermission = require('../models/rolePermissions');

// Create a new rolePermission
router.post('/rolePermissions', async (req, res) => {
  try {
    const newRolePermission = new RolePermission(req.body);
    await newRolePermission.save();
    res.status(201).json(newRolePermission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all rolePermissions
router.get('/rolePermissions', async (req, res) => {
  try {
    const rolePermissions = await RolePermission.find({ "deleted" : 0});
    res.json(rolePermissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a rolePermission by ID
router.get('/rolePermissions/:id', async (req, res) => {
  try {
    const rolePermission = await RolePermission.findById(req.params.id);
    if (!rolePermission) throw new Error('RolePermission not found');
    res.json(rolePermission);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update a rolePermission by ID
router.put('/rolePermissions/:id', async (req, res) => {
  try {
    const rolePermission = await RolePermission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!rolePermission) throw new Error('RolePermission not found');
    res.json(rolePermission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a rolePermission by ID
router.put('/delete/rolePermissions/:id', async (req, res) => {
  try {
    const rolePermission = await RolePermission.findByIdAndUpdate(req.params.id, {"deleted": 1} , { new: true });
    if (!rolePermission) throw new Error('RolePermission not found');
    res.json({ message: 'RolePermission deleted successfully', rolePermission });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
