var express = require('express')
var app = express()
var sys = require('sys')
var exec = require('child_process').exec;
var server = app.listen(YOUR PORT, 'YOUR IP');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

function execute(command,callback){
	exec(command, function(error,stdout,stderr){ callback(stdout); });
};


app.post('/', function (req, res) {
	if( req.body.command=="/8ball" ) {	
	var result = execute('../8ball/8ball.sh ' + req.body.channel_name +' ' + req.body.user_name + ' \" \'\'' + req.body.text + '\'\' \"', function(data){
})
}else{
	var result = execute('../fortune/fortune.sh ' + req.body.channel_name +' ' + req.body.user_name, function(data){
console.log(data);

})
}
})
	


