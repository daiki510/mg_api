const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComicsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  chapter_no: {
    type: Number,
    required: true,
  },
  chapter_url: {
    type: String,
    required: true,
  },
  detail_url: {
    type: String,
    required: true,
  },
  chapter_org: {
    type: String,
    required: true,
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Comics", ComicsSchema);
