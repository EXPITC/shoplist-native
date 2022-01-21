const {users} = require('../../models')


const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require("dotenv").config();


exports.register = async (req, res) => {
    try{
    const { username } = req.body
    let valid = await users.findOne({
        where: {username}
    })

    if (valid) {
        return res.status(201).send({
            status: 'failed',
            message: 'acc already exists'
        })
    }
    const salt = await bcrypt.genSalt(8)
    const hashPass = await bcrypt.hash(req.body.password, salt)
    const response = await users.create({
        username: req.body.username ,
        password:  hashPass,
    })
    const { id } = response
    
    const token = jwt.sign(response.id, process.env.JWT_TOKEN)
    
    res.status(200).send({
        status: 0,
        id,
        username,
        token
    })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            status: 'failed'
    })
}
}

exports.login = async (req, res) => {
    try {
    const { username, password } = req.body
        const userAcc = await users.findOne({
            where: {username}
        })
        
        if (!userAcc) {
            return res.status(400).send({
                status: 'failed',
                message: 'username or password wrong'
            })
        }
        const valid = await bcrypt.compare(password, userAcc.password)
        if (!valid) {
            return res.status(400).send({
                status: 'failed',
                message: 'username or password wrong'
            })
        }
        const { id } = userAcc
        const userData = {
            id
        }
        
        const token = jwt.sign(userData,process.env.JWT_TOKEN)
        req.user = id
        res.status(200).send({
            status: 'login',
            id,
            username,
            token
        })
     } catch (error) {
        console.log(error)
        res.status(400).send({
            status: 'failed'
        })
    }
}