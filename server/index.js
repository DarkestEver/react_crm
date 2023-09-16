const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()
const userRoute = require('./routes/user');
const roleRoute = require('./routes/role')
const permissionRoute = require('./routes/permission')
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/user', userRoute);
app.use('/api/admin', roleRoute);
app.use('/api/', permissionRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000!");
})