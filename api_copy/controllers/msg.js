const Message = require('../models/msg');

exports.filter_by_privacy = function(req, res) {
    Message.find({privacy: false}, function(err, data){
        if(err) res.send(err);
        res.json(data);
    });
}