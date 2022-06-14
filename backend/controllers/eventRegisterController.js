const eventModel = require('./../model/eventRegisterModel');

exports.register = async (req, res) => {
    const data = await eventModel.create(req.body);
    res.status(201).json({
        message: 'created file',
        data
    })
} 
