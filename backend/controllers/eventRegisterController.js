const eventData = require("./../model/eventRegisterModel");

exports.register = async (req, res) => {
  try{

    const data = await eventData.create(req.body);
    
    res.status(201).json({
      message: "data created",
      data,
    });
  } catch(err) {
    res.status(404).json({
      message: err.message
    })
  }
};
