process.on('uncaughtException', function (err) {
    console.log('900');
    console.error('Error caught in uncaughtException event:', err);
});

try {
    process.nextTick(function () {
        fs.readFile('non_existent.js', function (err, str) {
            if (err) throw err;
            else console.log(str);
        });
    });
}
catch (e) {
    console.error('Error caught by catch block:', e);
}

setTimeout(() => {
    console.log('hhh');
}, 10000);
