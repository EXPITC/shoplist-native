// const {users , items} =  require('../../models');
exports.Test = async (req, res) => {
    
    try {
        return res.status(200).send({
            hello: 'fku',
            message: 'what?'
        })
        
    } catch (err) {
        res.status(409).send({
            status: 'failed',
            message: 'server error: ' + err.message
        })
    }
}