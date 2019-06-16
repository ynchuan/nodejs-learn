var time = setTimeout(function () {
    console.log(new Date);
}, 5000);
setTimeout(() => {
    console.log('refresh start');
    console.log(new Date);
    time.refresh();
    console.log('refresh end');
}, 8000);
