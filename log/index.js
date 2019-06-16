export let level = 0x1101;
const write = (msg, type) => {
    process.stdout.write(`\n[${type.toUpperCase()}] ${msg} \n`);
};
const print = {
    any: {
        fn(msg) {
            write(msg, 'any');
        }
    },
    debug: {
        code: 0x0001,
        fn(msg) {
            write(msg, 'debug');
        }
    },
    info: {
        code: 0x0010,
        fn(msg) {
            write(msg, 'info');
        }
    },
    warn: {
        code: 0x0100,
        fn(msg) {
            write(msg, 'warn');
        }
    },
    fatal: {
        code: 0x1000,
        fn(msg) {
            write(msg, 'fatal');
        }
    }
};
const log = function (meta, msg) {
    let {
        code,
        fn
    } = meta;
    let isPrint = level & code;
    if (isPrint) {
        fn(msg);
    }
    print.any.fn(msg);
};
const logAPI = {
    debug(msg) {
        log(print.debug, msg);
    },
    info(msg) {
        log(print.info, msg);
    },
    warn(msg) {
        log(print.warn, msg);
    },
    fatal(msg) {
        log(print.fatal, msg);
    }
};
export default logAPI;

logAPI.debug('DEBUG>TEST');
logAPI.info('INFO>TEST');
logAPI.warn('WARN>TEST');
logAPI.fatal('FATAL>TEST');
