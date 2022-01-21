const { items ,users } = require('../../models')

exports.add = async (req, res) => {
    
    const response = await items.create({
        todo: req.body.todo ,
        userId: req.body.id
    })
    res.status(200).send({
        status: 0,
        response
    })
}

exports.allTodo = async (req, res) => {
    const response = await items.findAll({
        where: {userId: req.params.id}
    })
    res.status(200).send({
        status: 0,
        response
    })
}

exports.delTodo = async (req,res) => {
    
    const response = await items.destroy({
        where: {id: req.params.id}
    })
    res.status(200).send({
        status: 0,
        response
    })
}