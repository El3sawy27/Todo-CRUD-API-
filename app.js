const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes')
const db = mongoose.connection;
const port = 3000;
const app = express();


app.use(express.json());

mongoose.connect('mongodb://admin:admin@localhost:27017/ToDo?authSource=admin');

db.on('error', () => {
    console.log('Connection Error');
})
db.once('open', () => {
    console.log('DB is connected');
})


app.use('/task', taskRoutes)


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});