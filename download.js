import https from 'https';
import fs from 'fs';

const id = '1lZiGAgwoT5xeHXe8ArgtUIak7ZaVg6FV';
const url = `https://drive.google.com/uc?export=download&id=${id}`;

https.get(url, (res) => {
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    https.get(res.headers.location, (res2) => {
      res2.pipe(fs.createWriteStream('public/logo.png'));
    });
  } else {
    res.pipe(fs.createWriteStream('public/logo.png'));
  }
});
