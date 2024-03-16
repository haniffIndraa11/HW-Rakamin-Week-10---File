const express = require('express')
const router = express.Router()
const moviesController = require('../controller/moviesController') 
const multer = require('../middleware/multer')

router.post('/upload', multer, moviesController.uploadPhoto)

//get, post, put, delete
router.get('/', moviesController.getAll)
router.post('/:id', moviesController.getById)
router.post('/', moviesController.addMovie)
router.put('/:id', moviesController.updateMovie)
router.delete('/:id', moviesController.deleteMovie)

module.exports = router

/** 
- bug dibagian add movies, id kembali menjadi 1/2
- saat update movies, datanya malah bertambah
- saat upload link foto ke kolom photo, outputnya hanya 1 huruf
-  */