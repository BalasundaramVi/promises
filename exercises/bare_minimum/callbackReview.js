/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  fs.readFile(filePath, 'latin1', (err, content) => {
    if (err) {
      cb(err, content);
    } else {
      var idx = content.indexOf('\n');
      cb(err, content.slice(0, idx));
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  const options = {
    url: url,
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  };

  request(options, (err, status) => {
    if (err) {
      cb(err, status);
    } else {
      cb(err, status.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
