const cors = require('cors');
const bodyParser = require("body-parser");
require('express-async-errors');
const express = require('express');
const morgan = require('morgan');

let server = null;

async function start(api,repository){
    
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    app.use(morgan('dev'));
    
    app.use((err, req, res, next) => {
        
        
        console.log(err);
        res.sendStatus(500);
    })
    
    
    api(app,repository);
    
    server = app.listen(3333, () => {
        console.log("rodando!");
    });
    
    return server;
    
}

module.exports = {start};