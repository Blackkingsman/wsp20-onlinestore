const functions = require('firebase-functions');
const express = require('express')
const app = express()
const path = require('path')
exports.httpReq = functions.https.onRequest(app) 

app.get('/', (req, res) => {
    res.send('<h1>My Store (from backend) </h1>')
})

function frontendHandler(req, res) {
    res.sendFile(path.join(__dirname ,'/prodadmin/prodadmin.html'))
}

app.get('/login', frontendHandler);
app.get('/home', frontendHandler);
app.get('/add', frontendHandler);
app.get('/show', frontendHandler);

