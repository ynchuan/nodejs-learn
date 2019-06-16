let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
let parseParam = function (url) {
    var ret = {};
    url.replace(/([^&#?]+)=([^&#?]*)/ig, function ($, $1, $2, $3) {
        if (ret[$1]) {
            if (ret[$1] instanceof Array) {
                ret[$1].push($2);
            }
            else {
                ret[$1] = [ret[$1], $2];
            }
        }
        else {
            ret[$1] = $2;
        }
    });
    return ret;
};
let rst = parseParam(url);
console.log(rst);
