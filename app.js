var express = require('express');
var path = require('path');


var app= express();
var router = express.Router();
app.use('/',router);            



router.get('/group/:id', function(req, res,next){
    var idValue = req.params.id;
    console.log(idValue);
    res.json({id: idValue});
})

router.get('/group1', function(req, res,next){   //query
    var idValue = req.query.id;
    console.log(idValue);
    res.json({id: idValue});
})

app.use(function(err, req, res, next){
console.log('error !');
//resp.status(500)
console.log(__dirname);
//...
})

app.listen(1337, function(){
    console.log('Listening on 1337');
})