const express = require('express');
const path = require('path');

const server = express();
const publicFolder = path.resolve(__dirname, 'public');

server.use('/assets', express.static(`${publicFolder}/assets`));

server.get('/:file?', (req, res) => {
  const { file } = req.params;

  let fileToServe = file ? file.replace(/\.[^.]*$/, '') : 'index';

  switch (fileToServe) {
    case 'admin': {
      fileToServe = 'admin_login';
      break;
    }

    case 'login': {
      fileToServe = 'admin_login';
      break;
    }

    default:
  }

  return res.sendFile(`${publicFolder}/${fileToServe}.html`);
});

server.listen(process.env.PORT || 5000);
