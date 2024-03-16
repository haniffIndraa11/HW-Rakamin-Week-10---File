const express = require('express')
const router = express.Router()
const usersController = require('../controller/usersController') 

//get, post, put, delete
router.get('/', usersController.getAll)
router.post('/:id', usersController.getById)
router.post('/', usersController.addUser)
router.put('/:id', usersController.updateUser)
router.delete('/:id', usersController.deleteUser)


module.exports = router
 
/** 
- bug dibagian add user, id tidak bertambah
-  */