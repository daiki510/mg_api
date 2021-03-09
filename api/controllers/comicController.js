const mongoose = require('mongoose');
const Comic = mongoose.model('Comics');

//Index
exports.all_comics = (req, res) => {
  Comic.find({}, (err, comic) => {
    if (err) res.send(err);
    res.json(comic);
  });
};

//TODO:同じタイトルの場合はチャプターNoだけ更新するようにする
//Create
// exports.create_comic = (req, res) => {
//   Comic.update(
//     { title: req.body.title },
//     { $set: { chapter_no: req.body.chapter_no } },
//     function(err) {
//       if (err) throw err;
//     }
//   );
// };
exports.create_comic = (req, res) => {
  comic = Comic.findOne({title: req.body.title})
  console.log(comic.methods);
  const new_comic = new Comic(req.body);
  new_comic.save((err, comic) => {
    if (err) res.send(err);
    res.json(comic);
  });
};

// const checkDupulication = (req.body) => {
//   comics = Comic.find({title: req.title})
// };