const events = require("./../model/eventRegisterModel");

exports.home = async (req, res, next) => {

  const event = await events.find(req.query);
  res.status(200).json({
    length: event.length,
    event,
  });
};

exports.how_we_work = (req, res, next) => {
  res.status(200).json({
    message: "how we work page",
  });
};

exports.event_listening = (req, res, next) => {
  res.status(200).json({
    message: "event listening page",
  });
};

exports.contact = (req, res, next) => {
  res.status(200).json({
    message: "contact page",
  });
};


// for single page listed form
exports.getEventData = async (req, res, next) => {
  const event = await events.find(req.query.name);
  res.status(200).json({
    event
  })
};