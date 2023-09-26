const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer  = require('multer')
require('dotenv').config()
const fs = require('fs');
const userRoute = require('./routes/user');
const userDesignationRoute = require('./routes/userDesignation');
const roleRoute = require('./routes/role')
const permissionRoute = require('./routes/permission')
const rolePermissionRoute = require('./routes/rolePermission')
const CustomerRoute = require('./routes/customer')
const path = require("path");
const app = express();
const photosMidddleware = multer({ dest: 'uploads/'});

app.use(express.json());
app.use(cors({ credentials:true, origin: process.env.ORIGIN_URL}));
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.post('/api/customer/upload', photosMidddleware.single('image'), function (req, res, next) {
    try{
        const { path,originalname } = req.file;
        originalname.split('.');
        const newPath = path;
        fs.renameSync(path);
        res.send(req.file);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})


app.use('/api', userRoute);
app.use('/api', userDesignationRoute);
app.use('/api', permissionRoute);
app.use('/api', rolePermissionRoute);
app.use('/api', roleRoute);
app.use('/api', CustomerRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000!");
})