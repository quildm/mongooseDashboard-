var dogs = require('../controllers/dogs.js');
module.exports = function(app){

app.get('/', function(req, res){
    console.log('route');
    res.render('new');
});
app.post('/create', function(req, res){
    dogs.create(req,res);
});

app.get('/show', function(req, res){
    dogs.show(req,res);
});

app.get('/:id/edit/', function(req, res){
    dogs.edit(req,res);
});

app.post('/:id/delete', function(req, res){
    dogs.delete(req,res);
});
};

