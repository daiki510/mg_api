const comicController = require('../../api/controllers/comicController');
const mongoose = require('mongoose');
const comic = mongoose.model('Comics');

//TODO:modelを使用できるようにする
describe('api/cotrollers/comicController', () => {
  test('post', async () => {
    const req = {
      body: {
        "title": "テストコミック",
        "chapter_org": "テストコミック - Raw 【第1話】",
        "chapter_no": "1",
        "chapter_url": "https://test.com/test/chapter",
        "detail_url": "https://test.com/test/detail"
      }
    }

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }
    const next = jest.fn()

    jest.mock('../../api/models/comic', () => ({
      create: jest.fn((comic) => {
        const title = '12345'
        return Promise.resolve({ title, ...comic })
      })
    }))

    await comicController.create_comic(req, res, next)
    console.log(res)
    expect(res.status.calledWith(201)).toBeTruthy()
  })
})