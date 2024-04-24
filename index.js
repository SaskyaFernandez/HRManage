import express from 'express';
import userRouter from './routes/users.router.js';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import swaggerOption from './swagger.option.js';

const app = express();
const port = process.env.PORT || 3000;


//* Add swagger
expressJSDocSwagger(app)(swaggerOption);

// Import des routers
app.use('/api/users', userRouter);

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
