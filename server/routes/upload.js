const express = require('express');
const router = express.Router();
const multer  = require('multer')
const photosMidddleware = multer({ dest: 'uploads/'});
const fs = require('fs');

const { format } = require('date-fns');

router.post('/upload/:uploadFolder', photosMidddleware.single('image'), function (req, res) {
    try{
        const { uploadFolder } = req.params;
        const { path,originalname } = req.file;
        
        const folderPath = `uploads/${uploadFolder}`;
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath);
        }
        
        const parts = originalname.split('.');
        const ext = parts.pop();
        const timestamp = format(new Date(), "yyyyMMdd'T'HHmmssSSS");
        const newFileName = `${originalname}-${timestamp}.${ext}`;
    
        const newPath = path + '.' + ext;
    
        fs.renameSync(path, newPath);
        fs.renameSync(newPath, `${folderPath}/${newFileName}`);
    
        const logoPath = `${uploadFolder}/${newFileName}`;
        res.send(logoPath);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;
