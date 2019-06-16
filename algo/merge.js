var source = {
    name: 'ynchuan',
    sex: 'male',
    teacher: {
        'mathematics': 'WANG',
        'Chinese': 'LI',
        'childrens': [{
            a: 1,
            b: 2
        }]
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

var target = {
    name: 'LI',
    teacher: {
        'mathematics': 'SUN',
        'test ': 'SUN',
        'childrens': [{
            a: 3,
            b: 4
        }]
    }
}

var merge = function (source, target) {
    for (let key in target) {
        if (source[key]) {
            if (Array.isArray(target[key])) {
                for (let value of target) {
                    source[key].push(value);
                }
            }
            else if (typeof (target[key]) === 'object') {
                source[key] = merge(source[key], target[key]);
            }
            else {
                source[key] = target[key];
            }
        }
        else {
            source[key] = target[key];
        }
    }
    return source;
};
console.dir(JSON.stringify(merge(source, target)));
