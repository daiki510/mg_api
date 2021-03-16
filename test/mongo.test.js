// const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const databaseName = 'Testdb';


describe('insert', () => {
  let con;
  let connection;
  let db;

  beforeAll(async () => {
    const url = `mongodb://localhost/${databaseName}`
    con = await mongoose.connect(url, { useNewUrlParser: true })
    connection = await con.connection
    db = await connection.db
  });

  afterAll(async () => {
    await db.dropDatabase();
    await con.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const comics = db.collection('comics');

    const mockComic = {
      "_id": "test6-id",
      "title": "テストコミック",
      "chapter_org": "テストコミック - Raw 【第1話】",
      "chapter_no": "1",
      "chapter_url": "https://test.com/test/chapter",
      "detail_url": "https://test.com/test/detail"
    };
    await comics.insertOne(mockComic);

    const insertedComic = await comics.findOne({_id: 'test6-id'});
    expect(insertedComic).toEqual(mockComic);
    expect(insertedComic.title).toEqual(mockComic.title);
  });
});