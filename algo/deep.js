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
var isArray = function (obj) {
    var ret = 0;
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        ret = 1;
    }
    return ret;
};
var isObject = function (obj) {
    var ret = 0;
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        ret = 1;
    }
    return ret;
};
var deepCopy = function (obj) {
    var ret;
    if (isArray(obj)) {
        ret = [];
        obj.forEach((item) => {
            ret.push(deepCopy(item));
        });
    }
    else if (isObject(obj)) {
        ret = {};
        Object.keys(obj).forEach((k) => {
            ret[k] = deepCopy(obj[k]);
        });
    }
    else {
        ret = obj;
    }
    return ret;
};

var deepClone = function (obj) {
    var clone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (key in obj) {
            if (obj[key] && typeof obj[key] === "object") {
                clone[key] = deepClone(obj[key]);
            }
            else {
                clone[key] = obj[key];
            }
        }
    }
    return clone;
};
var rst = deepCopy(obj);
console.log(rst.teacher === obj.teacher);
console.log(rst.lessons[0].name === obj.lessons[0].name);
