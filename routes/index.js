const express = require("express");
const router = express.Router();
const movieRouter = require('./movieRoutes.js')
const userRouter = require('./userRoutes.js')
const path = require('path')

router.use('/api/images', express.static(path.join(__dirname, '../uploads')))
router.use('/api/movies', movieRouter)
router.use('/api/users', userRouter)

module.exports = router;