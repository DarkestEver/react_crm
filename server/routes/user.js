const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user')
const { authenticateJwt,checkRole, authenticateAdmin } = require('../middleware/auth');

const saltRounds = 10;

router.get('/me/:id', authenticateAdmin, async (req,res) => {
    const { id } = req.params;

    // const user = await User.findById(id).populate('role',['role','permission']);
    const user = await User.findById(id)
        .populate({
            path: 'role',
            populate: {
            path: 'permission',
            select: 'permissions' 
            }
        });

    if(user){
        res.status(200).json({ user });
    }else{
        res.status(500).json({ "message": "Internal server error"});
    }
})

router.put('/role/:id', authenticateAdmin, async (req,res) => {
    const { id } = req.params;
    const { roleId } = req.body;
    
    try{
        const user = await User.findByIdAndUpdate( id, {role : roleId})

        if(user){
            const populatedUser = await User.findById(id).populate({
                path: 'role',
                populate: {
                  path: 'permission',
                  select: 'permissions' 
                }
              });
    
            res.status(200).json({populatedUser});

        } else{
            res.status(404).json({"message": "User not found"});
        }
    }catch (error){
        console.log(error);
        res.status(500).json({ "message": "Internal server error"});
    }
    
})

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
        bcrypt.hash( password, saltRounds, async function(err, hash) {
            const newUser = new User({ username, password : hash });
            await newUser.save();
        });
        
      const token = jwt.sign({ username, role: '65003456dc94a6865b256d38' }, process.env.SECRET, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
    }
});
  
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const user = await User.findOne({ username });

  if(user){   
      bcrypt.compare(password, user.password , function(err, result) {
          if(err) throw err;
          if( result) {
        const token = jwt.sign({ username, role: user.role }, process.env.SECRET, { expiresIn: '1h' });
        res.json({ message: 'Logged in successfully', token });
    } else {
        res.status(403).json({ message: 'Invalid username or password' });
    }
});
}else{
    res.status(403).json({ message: 'User does not exits' });
}

});

router.get('/dashboard', authenticateJwt , (req,res) => {
    res.json({"message": "Authenticated route , This route is only visible to people who have logged in!"});
})
  
module.exports = router;