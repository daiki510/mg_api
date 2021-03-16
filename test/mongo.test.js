const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect("mongodb://localhost/", {
      useNewUrlParser: true,
    });
    db = await connection.db("Testdb");
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const comics = db.collection('comics');

    const mockComic = {
      "_id": "some-comic-id",
      "title": "テストコミック",
      "chapter_org": "テストコミック - Raw 【第1話】",
      "chapter_no": "1",
      "chapter_url": "https://test.com/test/chapter",
      "detail_url": "https://test.com/test/detail"
    };
    await comics.insertOne(mockComic);

    const insertedComic = await comics.findOne({_id: 'some-comic-id'});
    expect(insertedComic).toEqual(mockComic);
    expect(insertedComic.title).toEqual(mockComic.title);
  });
});