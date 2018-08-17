const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=>{
	if (err){		
		console.log('could not connect to db', err);
	}
	else
	{
		//console.log(config.secret);
		console.log('conncetd to database');
}
});
app.use(express.static(__dirname+ '/client/dist/client/'));
app.get('*', (req, res)=>{

	res.sendFile(path.join(__dirname + '/client/dist/client/index.html')) 
	//res.send('<h1>hello world</h1>');
});

app.listen(8080, ()=>{
	console.log('Listening on port 8080');
});
