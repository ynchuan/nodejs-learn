var http = require('http');
var server = http.createServer(function (req, res) {
    var url = req.url;
    if (url.match('a=4')) {
        res.end("a=4");
    }
    else {
        res.write('{"ss":"ff"');
        res.end("}");
        throw new Error('RES ERR');
    }
});
server.listen(9999, function () {
    console.log('http://127.0.0.1:9999');
});;
// process.on('uncaughtException', function (err) {
//     console.log('900');
//     console.error('Error caught in uncaughtException event:', err);
// });
