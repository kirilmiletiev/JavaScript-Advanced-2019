
function processArr(input) {
    let commandExecutor = (function () {
        let arr = [];
        return processor = {
            add: (element) => arr.push(element),
            remove: (element) => arr = arr.filter(x => x !== element),
            print: () => console.log(arr.join(','))
        };

    }());

    for (let line of input) {
        let tokens = line.split(' ');
        let commandName = tokens[0];
        commandExecutor[commandName](tokens[1]);
    }
}

processArr(['add hello', 'add again', 'remove hello', 'add again', 'print']);