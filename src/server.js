import express from 'express';
import path from 'path';

var app = express();
const port = 3000;
app.get('*', function(req, res){
    const uri = req.path;
    if (!req.path || req.path == '/') {
        res.sendFile(path.join(__dirname , '../src/index.html'));
    } else {
        res.sendFile(path.join(__dirname , req.path));
    }
    
});

app.listen(port, function(err){
    if(err) {
        console.log(`${port}`);
    } else {
        console.log('please visit localhost:'`${port}`);
    }
});