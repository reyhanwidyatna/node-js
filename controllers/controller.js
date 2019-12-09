var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var data = [{item : 'Sleeping'}, {item : 'Study'}, {item: 'Shopping'}]
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    //setup route handler
    app.get('/', function(req,res){
        res.render('main', {todos: data});
    });

    app.get('/main', function(req,res){
        res.render('main', {todos: data});
    });

    app.post('/main', urlencodedParser, function(req,res){
        data.push(req.body);
        res.json(data);
    });
 
    app.delete('/main/:item', function(req,res){
        data = data.filter(function(main){
            return main.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });

};