console.log(`child pid is ${process.pid}`);

process.on("message", (msg) => {
    console.log(`[child] get a data from parent is ${msg}\n`);
    process.send(`\nhello parent\n`);
});
