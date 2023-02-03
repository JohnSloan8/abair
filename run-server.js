const http = require('http');
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

let indexFile;
const requestListener = function (req, res) {
  console.log('req.url:', req.url);
  if (req.url) res.writeHead(200);
  res.end(indexFile);
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + '/dist/index.html')
  .then((contents) => {
    indexFile = contents;
    server.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
  })
  .catch((err) => {
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
  });
