const mongoose = require('mongoose');
const Comic = mongoose.model('Comics');

//Index
exports.all_comics = (req, res) => {
  Comic.find({}, (err, comic) => {
    if (err) res.send(err);
    res.json(comic);
  });
};

//Create
exports.create_comic = (req, res) => {
  const new_comic = new Comic(req.body);
  new_comic.save((err, comic) => {
    if (err) res.send(err);
    res.json(comic);
  });
};
