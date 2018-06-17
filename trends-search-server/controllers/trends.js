const Promise = require('promise');

module.exports = {
  getTrends
};

function getTrends () {
  const result = {'default': {'rankedList': {'rankedKeyword': [{'query': 'dog show 2016', 'value': 100, 'formattedValue': '100', 'link': '/'}, {'query': '2016 westminster dog show', 'value': 95, 'formattedValue': '95', 'link': '/'}]}}};

  return new Promise((resolve, reject) => {
    resolve(result);
  });
}
