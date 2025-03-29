const moment = require('moment')
const Todo = require('../models/Todo')

const homeController = async(req, res,next)=>{
    try {
        const todos = await Todo.find({}).sort({createdAt:-1})

        res.locals.moment = moment
        res.render('index',{title:"List Todo", todos})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const addTodoController = (req,res,next)=>{
    try {
        res.render('newTodo',{title:"Add Todo"})
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

const updateTodoFormController = async(req,res,next)=>{
    try {

        const {id} = req.query;
        const todo = await Todo.findById(id)
        res.render('updateTodo', {title:"Update Todo", todo})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteTodoFormController = (req,res,next)=>{
    try {
        const {id} = req.query;
        res.render('deleteTodo',{title:"Delete", id})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


const postAddTodoController = async(req,res,next)=>{

    try {
        const {title, desc} = req.body;

        // console.log(`${title} ${desc}`)
        const newTodo = new Todo({title:title, desc:desc})
        await newTodo.save()
    
        res.redirect('/') 
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

const updateTodoController = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const {title, desc} = req.body;

        const todo = await Todo.findById(id)

        if(!todo){
            return res.status(404).json({message:"Todo Not Found!!!"})
        }

        todo.title = title
        todo.desc = desc

        await todo.save()

        res.redirect('/')
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteTodoController = async(req,res,next)=>{
    try {
        const {id, confirm} = req.query
        if(confirm === "yes"){
            await Todo.findByIdAndDelete(id)
        }

        res.redirect('/')
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {homeController, addTodoController, updateTodoFormController, deleteTodoFormController, postAddTodoController, updateTodoController, deleteTodoController};