var Promise = require('bluebird');
// Promise.promisifyAll(require('fs'))
var _data = ['hello', 'world']
var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(_data);
    }, 1000)
});
p.then(function(data) {
    console.log(data.join(','));
    return data.push('promise');
}).then(function(d) {
    console.log(d.join(','));
    return d.push('hi');

}).then(function(d) {
    console.log(d.join(','));
});