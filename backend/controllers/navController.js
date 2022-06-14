const event = require('./../model/eventRegisterModel');

exports.home = async (req, res, next) => {
    const events = await event.find();

    res.status(200).json({
        message: 'we are at the home page',
        length: event.length,
        event
    })
}

exports.how_we_work = (req, res, next) => {
    res.status(200).json({
        message: 'how we work page'
    })
}

exports.event_listening = (req, res, next) => {
    res.status(200).json({
        message: 'event listening page'
    })
}

exports.contact = (req, res, next) => {
    res.status(200).json({
        message: 'contact page'
    })
}
