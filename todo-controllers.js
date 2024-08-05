const moment = require('moment');
const Todo = require('./todo-model')

const listTodoViewCon = async (req, res, next) => {
    try{
        const todos = await Todo.find({}).sort({ createdAt: -1});
        res.locals.moment = moment;

        res.render("index", {title: "List todo", todos: todos})
    }
    catch(error){res.status(500).json({message: error.message})}
};

const addTodoViewCon = (req, res, next) => {
    try{
        res.render("addTodo", {title: "Add todo"})
    }
    catch(error){res.status(500).json({message: error.message})}
};

const updateTodoViewCon = async (req, res, next) => {
    try{
        const {id} = req.query;
        const todo = await Todo.findById(id);

        res.render("updatetodo", {title: "Update todo", todo: todo})
    }
    catch(error){res.status(500).json({message: error.message})}
};

const deleteTodoViewCon = async (req, res, next) => {
    try{
        const {id} = req.query;
        const todo = await Todo.findById(id);

        res.render("deletetodo", {title: "Delete todo", todo: todo})
    }
    catch(error){res.status(500).json({message: error.message})}
};

const addTodoFuncCon = async (req, res, next) => {
    try {
        const {title, desc} = req.body;

        const newTodo = new Todo({
            title: title,
            desc: desc,
        });
        await newTodo.save();
        res.redirect('/')
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const updateTodoFuncCon = async (req, res, next) => {
    try{
        const {id} = req.params;
        const {title, desc} = req.body;

        const todo = await Todo.findById(id);
        if(!todo){
            res.status(404).json({message: "Todo not found"})
        }
        todo.title = title;
        todo.desc = desc;
        
        await todo.save();

        res.redirect("/")
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const deleteTodoFuncCon = async (req, res, next) => {
    try{
        const {id} = req.query;

        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.redirect("/")
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    listTodoViewCon,
    addTodoViewCon,
    updateTodoViewCon,
    deleteTodoViewCon,
    addTodoFuncCon,
    updateTodoFuncCon,
    deleteTodoFuncCon,
}