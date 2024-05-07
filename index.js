import express from 'express';
import userRouter from './routes/users.router.js';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import swaggerOption from './swagger.option.js';
import authRouter from './routes/Auth.router.js';
import { middlewareAuthentification, middlewareAuthorisation } from './middleware/index.middleware.js';
import holidaysRouter from './routes/holidays.router.js';
import rolesRouter from './routes/roles.router.js';
import cors from 'cors'; 

const app = express();
const port = process.env.PORT || 3000;
expressJSDocSwagger(app)(swaggerOption);

const corsOption = {
    origin: 'http://localhost:5173'
}
app.use(cors(corsOption));

app.use(express.json()) 
app.use('/api/auth', authRouter);
app.use(middlewareAuthentification);
app.use('/api/users', userRouter);
app.use('/api/holidays', holidaysRouter);
app.use('/api/roles', rolesRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
