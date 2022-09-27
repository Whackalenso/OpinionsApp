const mongoose = require("mongoose");

const opinionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
  author: {
    type: Number,
    required: true
  }
}, {timestamp: {createdAt: true, updatedAt: false}})

