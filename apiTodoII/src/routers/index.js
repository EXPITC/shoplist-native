const express = require('express');
const router = express.Router()
const {userCheck} = require('../middleware/userCheck')
//auth
const {
    register,
    login,
    auth
} = require('../controller/auth')

router.post('/register' , register)
router.post('/login' , login)
router.get('/login', userCheck, auth)

module.exports = router;
