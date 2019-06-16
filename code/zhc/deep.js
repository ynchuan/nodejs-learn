var obj = {
    name: 'ynchuan',
    sex: 'male',
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
    let o = {},
        keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        if (typeof obj[keys[i]] == 'object') {
            if (keys[i].match(/^\d+$/)) {
                o[Number(keys[i])] = deep(obj[keys[i]]);
            }
            else {
                o[keys[i]] = deep(obj[keys[i]]);
            }
        }
        else {
            o[keys[i]] = obj[keys[i]];
        }
    }

    return o;
};
console.log(deep(obj));
