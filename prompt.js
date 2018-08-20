const prompt = require('prompt');

prompt.start();

var schema = [
    {
        name: 'username',
        message: 'Username must be only alphabet, spaces and dispatchEvent',
        pattern: '^[a-zA-Z\s\-]+$',
        require: true
    },
    {
        name: 'password',
        pattern: '-d',
        message: 'Password must be numbers',
        hidden: true,
        require: true
    }
]

prompt.get(schema, function(err,result){
    if(err){
        throw new Error('error in prompt');
    }
   // console.log("username: "+ result.username);
   // console.log("password: ",result.password);
})