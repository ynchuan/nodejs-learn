function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

let timeP = timeout(100);
timeP.then((value) => {
    console.log(value);
});
timeP.then((value) => {
    console.log(1);
});
