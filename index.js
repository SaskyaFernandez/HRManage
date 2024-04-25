import express from 'express';
import userRouter from './routes/users.router.js';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import swaggerOption from './swagger.option.js';
import authRouter from './routes/Auth.router.js';
const app = express();
const port = process.env.PORT || 3000;


//* Add swagger
expressJSDocSwagger(app)(swaggerOption);

app.use(express.json()) 

// Import routers
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

// Start server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
