const prompt = require('prompt');

prompt.start();

var schema= {
    properties:{
        username:{
            pattern: '/^[a-zA-Z\s\-]+$'
        }
    }
}

//CallBack Function
const fs = require('fs');
fs.readFile('example.txt',function(err, logData){
    if(err) throw err;
    let text = logData.toString();
    let results= [];

    var lines = text.split('\n');
    lines.forEach(function(value, index){
        var parts = value.split(' ');
        var word = parts[1];
        var count = parseInt(parts[2]);
        if(!results[word]){
            results[word]= 0;
        }
        results[word] += count;
        console.log(results);
    })
});
console.log('Program ended');