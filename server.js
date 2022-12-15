/* eslint-disable import/no-unresolved */
const jsonServer = require('json-server');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// db.json를 조작하기 위해 lowdb를 사용
const adapter = new FileSync('db.json');
const db = low(adapter);

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.post('/auth/comments/:id', (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const data = db
    .get('comments')
    .find({
      id: Number(id),
      password,
    })
    .value();
  if (data) {
    res.send({ result: true, message: 'success' });
  } else {
    res.send({ result: false, message: 'failed' });
  }
});

server.post('/auth/posts/:id', (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const data = db
    .get('comments')
    .find({
      id: Number(id),
      password,
    })
    .value();
  if (data) {
    res.send({ result: true, message: 'success' });
  } else {
    res.send({ result: false, message: 'failed' });
  }
});

server.use((req, res, next) => {
  next();
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});