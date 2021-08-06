const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = 3000;


//require routers
const userRouter = require('./routers/userRouter');

const app = express();
app.use(cors());
app.use(express.json()); // this is body parser

//app.use
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname,'../index.html'));
});
app.use('/user', userRouter);

//global error handler
app.use((err,req,res,next) => {
    const status = err.status || 500;
    const message = err.message || "An Unknown Error Occurred";
    return res.status(status).send(message)
})

//turn on server
app.listen(PORT, () => {
    console.log('Server Connected - Listening on port: ', PORT)
})