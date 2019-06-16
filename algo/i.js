function a() {
    var i = 10;
    console.log(i++);
    console.log(i);
}

function b() {
    var i = 10;
    console.log(++i);
    console.log(i);
}

function c() {
    var i = 10;
    i++;
    console.log(i);
    console.log(i);
}

function d() {
    var i = 10;
    ++i;
    console.log(i);
    console.log(i);
}
a();
b();
c();
d();
