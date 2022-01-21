const express = require('express');
const router = express.Router()


const {
    Test
} = require('../controller/user')

router.get('/Test', Test)

const {
    register,
    login
} = require('../controller/auth')

router.post('/register',register )
router.post('/login',login )

const {
    add,
    allTodo,
    delTodo
} = require ('../controller/items')

router.post('/add' , add)
router.get('/allTodo/:id' , allTodo)
router.delete('/delTodo/:id' , delTodo)

module.exports = router;