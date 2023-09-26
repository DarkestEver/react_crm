const express = require('express');
const router = express.Router();
const Permission = require('../models/permissions'); 

// Create a new permission
router.post('/permissions', async (req, res) => {
  try {
    const newPermission = new Permission(req.body);
    await newPermission.save();
    res.status(201).json(newPermission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all permissions
router.get('/permissions', async (req, res) => {
  try {
    const permissions = await Permission.find({"deleted": 0});
    res.json(permissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a permission by ID
router.get('/permissions/:id', async (req, res) => {
  try {
    const permission = await Permission.findById(req.params.id);
    if (!permission) throw new Error('Permission not found');
    res.json(permission);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update a permission by ID
router.put('/permissions/:id', async (req, res) => {
  try {
    const permission = await Permission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!permission) throw new Error('Permission not found');
    res.json(permission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a permission by ID
router.put('/delete/permissions/:id', async (req, res) => {
  try {
    const permission = await Permission.findByIdAndUpdate(req.params.id, {"deleted": 1} , { new: true });
    if (!permission) throw new Error('Permission not found');
    res.json({ message: 'Permission deleted successfully' , permission});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
