let str = "8432957983475934.84378";
let reg = new RegExp(/(?<=\d)(?=(\d{3})+(\.\d+)?$)/, 'g');
console.log(str.replace(reg, ','));
