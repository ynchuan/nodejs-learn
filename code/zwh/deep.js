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
    let obja = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === 'object') {
                    obja[key] = deep(obj[key]);
                }
                else {
                    obja[key] = obj[key];
                }
            }
        }
    }
    else {
        obja = obj;
    }
    return obja;
};
console.log(obj);
console.log(deep(obj));
