const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.userCheck = async (req, res, next) => {
    const auth = req.header('Authorization');
    
    const token = auth && auth.split(' ')[1]

    if (!token) {
        return res.status(400).send({
            status: 'failed',
            messsage: 'Invalid token'
        })
    }

    try {
        
        const verify = jwt.verify(token, process.env.JWT_TOKEN)

        // res.send(verify)
        req.user = verify;

        next();
    } catch (err) {
        res.status(409).send({
            status: 'failed',
            message: 'server error: ' + err.message
        })
    }

}