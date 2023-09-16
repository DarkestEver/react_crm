const express = require('express');
const router = express.Router();
const Role = require('../models/role')
const { authenticateJwt, checkRole, authenticateAdmin } = require('../middleware/auth');
const Permission = require('../models/permission');

const checkPermission = require('../middleware/checkPermission');

router.get('/checkpermission', authenticateJwt, checkPermission(['read','write']), (req, res) => {
  res.json("This route requires read and write permissions");
});


router.get('/permission', authenticateAdmin, async (req, res) => {
    try {
        const permission = await Permission.find();
        res.json(permission);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add permission to a role
router.put('/permission/:id', authenticateAdmin, async (req, res) => {
    const { id } = req.params;
    const { permissionId } = req.body;
    try {
        const role = await Role.findByIdAndUpdate(id, { $push: { permission: permissionId } });
        if (!role) {
            res.status(404).json({ "message": "Role does not exist" });
        } else {
            res.status(200).json({ "message": "Permission added to role" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Will not be used very frequent so commented out !
// router.post('/permission', async (req, res) => {
//     const { permissions } = req.body;

//     try {
//         const permissionDoc = new Permission({permissions: permissions})
//         await permissionDoc.save();

//         res.status(201).json({ message: 'Permission created successfully', permissionDoc });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

  
router.delete('/permission/role/:roleId', authenticateAdmin, async (req, res) => {
    const { roleId } = req.params;
    const { permissionId } = req.body;
    
    try {
        const deletedRolePerm = await Role.findByIdAndUpdate(roleId, { $pull: { permission: permissionId } },  { new: true } )
            .populate('permission', 'permissions');
        ;
        if (!deletedRolePerm) {
            return res.status(404).json({ message: 'Role permission not found' });
        }

        res.json({ message: 'Role permission deleted successfully', deletedRolePerm });
    }catch(error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

  
module.exports = router;