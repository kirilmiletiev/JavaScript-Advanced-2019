function info() {
    let obj = {};
    for (let i of arguments) {
        if (!obj[typeof (i)]) {
            obj[typeof (i)] = 0;
        }
        obj[typeof (i)]++;
        console.log(typeof (i) + ': ' + i);
    }
    for (let i of Object.keys(obj).sort((a, b) => obj[b] - obj[a])) {
        console.log(`${i} = ${obj[i]}`);
    }
}
info('cat', 42, function () { console.log('Hello world!'); });