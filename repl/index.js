const repl = require('repl');

const r = repl.start({
    prompt: '> ',
    writer: myWriter
});

function myEval(cmd, context, filename, callback) {
    console.log('CMD:' + cmd);
    callback(null, cmd);
}

function myWriter(output) {
    console.log('OUTPUT:' + output);
    return output.toUpperCase();
}
