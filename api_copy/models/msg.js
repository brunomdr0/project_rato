'use strict';

const restful = require('node-restful');
const mongoose = restful.mongoose

var msgSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   body: {
      type: String,
      required: true
   },
   privacy: {
      type: Boolean,
      default: false
   },
   Created_date: {
      type: Date,
      default: Date.now
   }
});
module.exports = restful.model('Messages', msgSchema);