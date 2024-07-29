const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://tanmaykulkarni2112:Arnavyk1@cluster0.oc5oiiw.mongodb.net/');

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed  : Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}