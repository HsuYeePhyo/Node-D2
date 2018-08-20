var express = require('express');
var path = require('path');
const bodyParser = require('body-parser')

//new express into object
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

//app must use router, if not cannot run program
app.use('/',router);

router.use('/',function(req,res,next){  //router matches url
    next();     //ignore this and go to next route
})

router.use('/home', function(req,res,next){
    throw new Error(message, "Error");
    res.json({message: 'Welcome to Home'});      //response Json object => return to client
})

//router using param    localhost:1337/group/3
router.get('/group/:id', (req,res,next)=>{
    var idValue = req.params.id;        //can't use param,no more use
    var id2 = req.query.id;
    console.log(idValue)
    res.json({id: idValue, id1: id2});  //put same id: => will show only last result
})

//router using query    localhost:1337/group2?id=3
router.get('/group2', (req,res,next)=>{
    var id = req.query.id;
    var num = req.query.num;
    res.send({id: id, number: num});
})

router.post('/group3',(req,res,next)=>{
    var content = req.body;
    console.log(content);
    res.json(content);
})
//display error
app.use(function(err,req, res, next){
    //show error page
    res.sendFile(__dirname + "/error.html");      
    res.sendFile(path.join(__dirname + '/error.html'));

   //to see stack of error
    res.json({Error: err.stack});   
    res.status(500).send({message: err.stack});     
})

app.listen(1337,function(){})