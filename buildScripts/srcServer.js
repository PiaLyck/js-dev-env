//Configures web server that will serve up the files in the src directory

/* 
ES5 style
var express = require('express');
var path = require('path');
var open = require('open');

var port = 3006;
var app = express(); */

/* ES6 style */
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* Console.logs are okay in build scripts, so: */
/* eslint-disable no-console */

const port = 3006;
const app = express();

//setting up Express to handle our webpack bundle
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo:true,
    publicPath: config.output.publicPath
}));

//declare routing
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
}); 

app.listen(port, function(err){
    if(err){
    console.log(err);
    }else{
    open('http://localhost:' + port);
}
});