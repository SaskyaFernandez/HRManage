const express = require('express');
const userController = require('./controllers/UserController');
const app = express();
const port = process.env.PORT;

app.use('/api/users', userController);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})