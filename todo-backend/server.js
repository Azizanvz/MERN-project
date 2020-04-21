const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const PORT = 4000;
const todoRoutes = express.Router();


let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());
app.use('/todos', todoRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser : true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("connection established successfully");
})

todoRoutes.route('/').get(function(req, res){
    Todo.find(function(err, todos){
        if(err){
            console.log(err);
        }else{
            res.json(todos);
        }
    })
});

todoRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Todo.findById(id, function(err, todo){
        if (err){
            console.log(err);
        }else {
            res.json(todo);
        }
    })
});

todoRoutes.route('/create').post(function(req, res){
    let todo = new Todo(req.body);

    todo.save()
        .then(todo => {
            res.status(200).json({'todo' : 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('failed adding a new todo');
        });

});

todoRoutes.route('/update/:id').post(function(req,res){
    let id = req.params.id;
    Todo.findById(id, function(err, todo){
        if (!todo) {
            res.status(404).send('Data is not found')
        }else {
            todo.description = req.body.description;
            todo.responsible = req.body.responsible;
            todo.priority = req.body.priority;
            todo.isCompleted = req.body.isCompleted;

            todo.save()
                .then(todo => {
                    res.status(200).json({'todo' : 'todo updated successfully'});
                })
                .catch(err => {
                    res.status(400).send('Update failed');
                })
        }
    })
});

app.listen(PORT, function(){
    console.log("Server is running on port " + PORT);
})