var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');
module.exports = {
    
    show:function(req, res) {
        Dog.find({}, function(err, response) {
       console.log("this is the response: ", response)
            if (err) { console.log(err); }
        res.render('index', { dog: response});
         })},

    edit:function(req,res){Dog.find({ _id: req.params.id }, function(err, response) {
        if (err) { console.log(err); }
        res.render('edit', { dog: response[0] });
            })},

    create:function(req,res){
        var dog = new Dog({
            name:req.body.name,
             weight:req.body.weight, 
             color:req.body.color});
             console.log("This is my data: ",dog);
        dog.save(function(err){
        if (err){ 
            console.log(err);
         }else {
        res.redirect('/show');
        }
            })},
    
    delete:function(req,res){Dog.remove({ _id: req.params.id }, function(err, result){
        if (err) { console.log(err); }
        res.redirect('/');
            })}
}