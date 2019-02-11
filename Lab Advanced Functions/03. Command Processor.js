function commandProcessor(input) {
    let arr = input.toString().split(',');
    let resultStr = '';

    for (let i of arr){
        let split = i.split(' ');

        if (split.length >1){
            let command = split[0];
            let token = split[1];
            if (command==='append') {
                resultStr += token;
            }else if (command === 'removeStart') {
                resultStr = resultStr.substr(Number(token));
            }else   if (command === 'removeEnd') {
                resultStr = resultStr.substring(0,resultStr.length - Number(token));
            }
        }else{
            console.log(resultStr);
        }
    }
}


commandProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);


 commandProcessor(['append 123',
     'append 45',
     'removeStart 2',
     'removeEnd 1',
     'print']
 );