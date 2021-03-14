const mongoose = require('mongoose');
const Comic = mongoose.model('Comics');

//TODO:必要なAPI
// - 各コミックの最新話一覧を取得
// - 新規チャプター登録
// - 各コミックの全チャプター取得
// - 特定のコミックの最新話取得
// - 特定のコミックの全チャプター取得

//Index
//TODO:各コミックの最新話一覧を取得する
exports.all_comics = (req, res) => {
  let selectedComics = [];
  Comic.find({}, (err, comics) => {
    if (err) res.send(err);
    let set = new Set(comics.map(comic => { return comic.title; }));
    console.log(set)
    selectedComics = Array.from(set);
  });
  console.log("=====================")
  console.log(selectedComics)
  selectedComics.map(comic => {
    Comic.find({title: comic.title})
          .sort( { chapter_no: -1 } )
          .limit(1, (err, comic) => {
      if (err) res.send(err);
      return comic;
    });
  })
  res.send(selectedComics);
};

exports.create_comic = (req, res) => {
  const new_comic = new Comic(req.body);
  Comic.findOne({title: req.body.title}, function(err, result) {
    if (!result || req.body.chapter_no > result.chapter_no) {
      new_comic.save((err, comic) => {
        if (err) res.send(err);
        //TODO:レスポンスの構成を考える
        res.json({"message": "new chapter created"});
      });
    } else {
      //TODO:レスポンスの構成を考える
      res.send({"message": "not latest"});
    }
  });
};
