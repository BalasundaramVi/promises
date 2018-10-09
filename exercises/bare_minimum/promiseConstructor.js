/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'latin1', (err, data) => {
      if (err) {
        reject(err);
      } else {
        var idx = data.indexOf('\n');
        var name = data.slice(0, idx);
        resolve(name);
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  const options = {
    url: url,
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  };

  return new Promise((resolve, reject) => {
    request(options, (err, data) => {
      if (err) {
        reject(err, data);
      } else {
        resolve(data.statusCode);
      }
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
