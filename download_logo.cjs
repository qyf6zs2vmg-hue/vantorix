const https = require('https');
const fs = require('fs');

https.get("https://docs.google.com/uc?export=download&id=1lZiGAgwoT5xeHXe8ArgtUIak7ZaVg6FV", (response) => {
  if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
    // Follow redirect
    https.get(response.headers.location, (res) => {
      res.pipe(fs.createWriteStream('public/logo.png'));
    });
  } else {
    response.pipe(fs.createWriteStream('public/logo.png'));
  }
});
