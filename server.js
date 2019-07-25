const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

// Import routes
require('./server/routes')(app);



app.listen(8000, (err)=>{
    if(err){console.log(err)}
    console.log('Listening on port 8000')
})
