import express from 'express';
import userRouter from './routes/users.router.js';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import swaggerOption from './swagger.option.js';
import authRouter from './routes/Auth.router.js';
import { middlewareAuthentification } from './middleware/index.middleware.js';

const app = express();
const port = process.env.PORT || 3000;
expressJSDocSwagger(app)(swaggerOption);

app.use(express.json()) 
app.use('/api/auth', authRouter);
app.use(middlewareAuthentification);
app.use('/api/users', userRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
