const multer = require('multer')
const path = require('path')

//menentukan lokasi pengunggahan
const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'))
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null,  Date.now() + path.extname(file.originalname))
    }
})


const multerMiddleware = multer({storage: diskStorage}).single('image')

module.exports = multerMiddleware