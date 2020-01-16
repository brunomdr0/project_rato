'use strict';

// module.exports = function(app) {

// const messages = require('../controllers/msg');
// // messages Routes
// app.route('/messages')
//    .get(messages.list_all_messages)
//    .post(messages.create_a_message);
// app.route('/messages/:msgId')
//    .get(messages.read_a_message)
//    .put(messages.update_a_message)
//    .delete(messages.delete_a_message);
// };

const express = require('express');

module.exports = function(app) {
   const router = express.Router();
   app.use('/api', router)

   const msgService = require('../models/msgService');
   msgService.register(router, '/messages');
}