
const Messages = require('./msg');
const restful = require('node-restful');
const Message = restful.model('Messages');

const message = require('../controllers/msg');

Message.methods(['get', 'post', 'put', 'delete'])
Message.before('get', message.filter_by_privacy);
Message.updateOptions({ new: true, runValidators: true})

module.exports = Message;
