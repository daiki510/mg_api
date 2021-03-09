module.exports = function(app) {
  const comicList = require('../controllers/comicController');

  app.route('/api/v1/comics')
    .get(comicList.all_comics)
    .post(comicList.create_comic);

  app.route('/comics/:comicId')
    .get(comicList.load_comic)
    .put(comicList.update_comic)
    .delete(comicList.delete_comic);
};