let test = [3, 4, 1, 6, 9, 5];
test.sort((a, b) => {
    console.log('%d,%d', a, b);
    return b - a;
});
console.log(test);
