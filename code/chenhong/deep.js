var obj = {
    name: '1',
    sex: '1',
    teacher: {
        'mathematics': 'WANG',
        'Chinese': 'LI'
    },
    lessons: [{
        name: 'mathematics',
        grade: 1
    }, {
        name: 'Chinese',
        level: {
            num: 15,
            mark: '2A'
        }
    }]
};
var deep = function (obj) {
    var newobj = Array.isArray(obj) ? [] : {};
    for (var item in obj) {
        if (typeof obj[item] == 'object') {
            newobj[item] = deep(obj[item]);
        }
        else {
            newobj[item] = obj[item];
        }
    }
    return newobj;
};
console.log(obj);
console.log(deep(obj));
