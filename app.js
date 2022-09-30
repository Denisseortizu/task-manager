const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require('dotenv').config()

//Middleware
app.use(express.json());


//Rutas
app.get('/hello', (req, res) =>{
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

//app.get('api/v1/task')        //Gets all the tasks
//app.post('api/v1/task')       //Create a new task
//app.get('api/v1/task/:id')    //Get a single task
//app.patch('api/v1/task/:id')  //Update task
//app.delete('api/v1/task/:id') //Delete task


const port = 3000;

const start= async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log( `server is listening on port ${port} ...`))
    } catch (error){
        console.log(error)
    }
}

start()

