const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComicsSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
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

{
  title: '呪術廻戦',
  chapterOrg: '呪術廻戦 - Raw 【第141話】',
  chapterNo: '141',
  chapterUrl: 'https://manga1000.com/%e3%80%90%e7%ac%ac141%e8%a9%b1%e3%80%91%e5%91%aa%e8%a1%93%e5%bb%bb%e6%88%a6-raw/',
  detailUrl: 'https://manga1000.com/%e5%91%aa%e8%a1%93%e5%bb%bb%e6%88%a6-raw-free1/'
}