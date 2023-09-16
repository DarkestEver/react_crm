const express = require('express');
const router = express.Router();
const Role = require('../models/role')
const Permission = require('../models/permission')
const { authenticateJwt, checkRole, authenticateAdmin } = require('../middleware/auth');

router.get('/roles/:id', authenticateAdmin , async (req, res) => {
    const { id } = req.params;
    try {
        const role = await Role.findById(id).populate('permission',['permissions']);
        res.json(role);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get('/roles', authenticateAdmin, async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/roles', authenticateAdmin, async (req, res) => {
    const { role } = req.body;

    try {
        const existingRole = await Role.findOne({ role });

        if (existingRole) {
            return res.status(400).json({ message: 'Role already exists' });
        }
        const readPermission = await Permission.findOne({ _id: '65015420f46a885880dc7274' }); 

        if (!readPermission) {
            return res.status(404).json({ message: 'Read permission not found' });
        }

        const newRole = new Role({
            role,
            permission: [readPermission._id], 
        });
        
        await newRole.save();

        const populatedNewRole = await Role.findById(newRole._id).populate('permission',['permissions']);

        res.status(201).json({ message: 'Role created successfully', populatedNewRole });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/role', authenticateAdmin, async (req, res) => {
    const { roleId, role} = req.body;

    try {
        const updatedRole = await Role.findByIdAndUpdate(roleId, { role }, { new: true });

        if (!updatedRole) {
            return res.status(404).json({ message: 'Role not found' });
        }

        res.json({ message: 'Role updated successfully', updatedRole });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
});
  
router.delete('/role/:id', authenticateAdmin, async (req, res) => {
    const roleId = req.params.id;
    try {
        const deletedRole = await Role.findByIdAndDelete(roleId);

        if (!deletedRole) {
            return res.status(404).json({ message: 'Role not found' });
        }

        res.json({ message: 'Role deleted successfully' });
    }catch(error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

  
module.exports = router;