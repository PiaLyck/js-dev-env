/* Configures web server that will serve up the files in the dist directory.
This is NOT for actual production use. Just useful for hosting the minified 
production build for local debugging purposes.
*/

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* Console.logs are okay in build scripts, so: */
/* eslint-disable no-console */

const port = 3006;
const app = express();

app.use(compression());

//Serve the dist directory
app.use(express.static('dist'));

//declare routing
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'));
}); 

//Get users
app.get('/users', function(req, res){
    //Hard coded for simplicity, but pretend this hits a real database. 
    res.json([
        {"id": 1, "firstName":"Chubby", "lastName": "von Fatty", "email":"justbigboned@barkmail.com"},
        {"id": 2, "firstName":"Fluffy", "lastName": "McDog", "email":"fur4u@barkmail.com"},
        {"id": 3, "firstName":"Mutt", "lastName": "Squigglybutt", "email":"bastardboi98@barkmail.com"},
        {"id": 4, "firstName":"Sir Hal", "lastName": "Badbreath", "email":"hal.i.tosis@barkmail.com"}
    ]);
})

app.listen(port, function(err){
    if(err){
    console.log(err);
    }else{
    open('http://localhost:' + port);
}
});