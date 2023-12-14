const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const userRoute = require('./routes/user');
const uploadRoute = require('./routes/upload')
const userDesignationRoute = require('./routes/userDesignation');
const roleRoute = require('./routes/role')
const permissionRoute = require('./routes/permission')
const rolePermissionRoute = require('./routes/rolePermission')
const CustomerRoute = require('./routes/customer')
const app = express();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/users');
const path = require("path");

app.use(express.json());
app.use('/api/uploads', express.static(__dirname+'/uploads'))

app.use(cors({ credentials:true, origin: process.env.ORIGIN_URL}));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


// app.post('/api/user/auth/signup', async (req, res) => {
//     const { username, password } = req.body;
//     try{
//         const user = await User.findOne({ username });
        
//         if (user) {
//             res.status(403).json({ message: 'User already exists' });
//         } else {
//         bcrypt.hash( password, saltRounds, async function(err, hash) {
//             const newUser = new User({ username, password : hash });
//             await newUser.save();
//         });
        
//         const token = jwt.sign({ username, email }, process.env.SECRET, { expiresIn: '1h' });
//         res.json({ message: 'User created successfully', token });
//         }
//     }catch(err){
//         res.json({"message": 'Error', err})
//     }
// });

app.use('/api', userRoute);
app.use('/api', uploadRoute);
app.use('/api', userDesignationRoute);
app.use('/api', permissionRoute);
app.use('/api', rolePermissionRoute);
app.use('/api', roleRoute);
app.use('/api', CustomerRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000!");
})