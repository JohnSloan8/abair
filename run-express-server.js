const express = require('express');
const path = require('path');
const app = express();

const host = 'localhost';
const port = 8080;

// Static Middleware
app.use('/assets', express.static(path.join(__dirname, './dist/assets')));

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, './dist') });
});

app.listen(port, function (error) {
  if (error) throw error;
  console.log(`Server is running on http://${host}:${port}`);
});
