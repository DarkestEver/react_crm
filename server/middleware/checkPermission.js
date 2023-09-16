const Role = require('../models/role');

// Don't forget to add a authenticateJWT middleware before it, to get req.user
const checkPermission = (requiredPermissions) => async (req, res, next) => {
  try {
    const { role } = req.user;
    const userRole = await Role.findById(role).populate('permission', 'permissions');

    const hasAllPermissions = requiredPermissions.every((perm) =>
        userRole.permission.some((userPerm) => userPerm.permissions === perm)
    );

    if (!hasAllPermissions) {
      return res.status(403).json({ message: 'Permission denied' });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = checkPermission;
