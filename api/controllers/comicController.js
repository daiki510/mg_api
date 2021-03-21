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
//リンク付きで返すようにする
exports.all_comics = (req, res) => {
  Comic.find({}, (err, comics) => {
    if (err) res.send(err);
    let set = new Set(comics.map(comic => { return `${comic.title}: ${comic.chapter_no}`; }));
    selectedComics = Array.from(set);
    console.log(selectedComics)
    res.send(selectedComics);
    
  });
};

exports.create_comic = (req, res) => {
  console.log('============create_comic=================');
  console.log(req.body.title);
  const new_comic = new Comic(req.body);
  Comic.findOne({title: req.body.title}, function(err, result) {
    console.log(result)
    if (!result || req.body.chapter_no > result.chapter_no) {
      new_comic.save((err, comic) => {
        if (err) return res.json(responseJson(500, comic, err));
        return res.json(responseJson(201, comic, err));
      });
    } else {
      return res.send(responseJson(304, req.body, err));
    }
  });
};

const responseJson = (code, comic = null, err) => {
  let message
  switch (code) {
    case 201: {
      message = "new chapter created"
      break
    }
    case 304: {
      message = "not latest, not created"
      break
    }
    case 500: {
      message = "request failed"
      break
    }
  }
  return {
    "status": code,
    "data": {
      "title": comic?.title,
      "chapter_no": comic?.chapter_no
    },
    "message": message,
    "error": err ?? ""
  }
}

