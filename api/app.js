const express = require('express');
const app = express();
const port = 3001;

app.get('/api/v1/comics', (req, res) => {
  const todoList = [
      { title: 'JavaScriptを勉強する', done: true },
      { title: 'Node.jsを勉強する', done: false },
      { title: 'Web APIを作る', done: false }
  ];

  // JSONを送信する
  res.json(todoList);
});

app.listen(port, () => console.log(`listening on port ${port}！！`))