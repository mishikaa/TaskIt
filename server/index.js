const express = require('express');
const app = express();
const cors = require('cors');

const pool = require('./db');
const { query } = require('express');
const path = require('path')

const bcrypt = require('bcrypt');
const session = require('express-session');

app.use(express.json());
//parse the requests of content-type application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// CORS to enable to fetch data from client side even after it being on different port
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
  }));

//ROUTES

app.get('/signup', (req, res, next) => {
    res.send('signup');
})

//Creating a todo
app.post('/todos', async(req, res) => {
    try {
        // console.log(req.body);
        const {description} = req.body;
        const newToDo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]);
            res.json(newToDo.rows[0]);
    } catch(err){
        console.log(err.message);
    }
});

//Display todos
app.get('/todos', async(req, res) => {
    try{
        const allTodos = await pool.query(
            "SELECT * FROM todo");
        res.json(allTodos.rows);
    }catch(err) {
        console.log(err.message);
    }
})

// Delete all todos
app.delete('/todos', async(req, res) => {
    try {
        const deleteAll = await pool.query('DELETE FROM todo');
        res.json("All todos deleted");
    } catch (err) {
        console.log(err.message)
    }
})

//Updating the completed status of a todo
app.get('/todos/:id/doneStatus', async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query(
            "UPDATE todo SET iscomplete = NOT iscomplete WHERE todo_id = ($1)", 
            [id]
        );
        const doneTodos = await pool.query(
            "SELECT * FROM todo WHERE iscomplete = true"
        );
        res.json(doneTodos.rows);
    } catch (err) {
        console.log(err.message);
    }
})

//Get a specific todo
app.get('/todos/:id', async(req, res) => {
    try {
    const {id} = req.params;
    const todo = await pool.query(
        "SELECT * FROM todo WHERE todo_id=($1)",[id]);
    res.json(todo.rows);
    } catch(err) {
        console.log(err.message);
    }
})

//Update todo 
app.put('/todos/:id', async(req, res) => {
    const {id} = req.params;
    const {description} = req.body;
    const updateTodo = await pool.query(
        "UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description, id]);
    res.json(updateTodo);
})

//Delete todo
app.delete('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1',
        [id]); 
        res.json("Deleted"); 
    } catch (error) {
        console.log(err.message);
    }
    
});

// DEPLOYMENT 
const __dirname1 = path.resolve() 
app.use(express.static(path.join(__dirname1, "/clientt/build")))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "clientt", "build", "index.html"))
})

app.listen(5000, () => {
    console.log("Listening on port 5000");
});

