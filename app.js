import express from 'express';
import path from 'path';

import template from './src/template';
import ssr from './src/server';
import data from './assets/data.json';

const app = express();
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.disable('x-powered-by');

const initialState = { 
  todoList: {
    isFetching: false, 
    todoList: data
  }
};

app.get('/', (req, res) => {
  const { preloadedState, content} = ssr(initialState);
  const response = template("Server Rendered Page", preloadedState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});

app.get('/client', (req, res) => {
  const response = template('Client Side Rendered page');
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));