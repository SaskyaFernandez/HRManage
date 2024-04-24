import { Sequelize } from 'sequelize';
import usersBuilder from './users.models.js';
const sequelize = new Sequelize(process.env.DB_URI);

// L'objet "db"
//* Initialisation
const db = {};

// //* Injection de l'instance de sequelize
db.sequelize = sequelize;

// //* Ajouter les modeles
db.Users = usersBuilder(sequelize);


//* Export de l'objet DB
export default db;

(async () => {
    try {
        await sequelize.authenticate();

    } catch (error) {
        console.error('Impossible de se connecter à la base de données :', error);
    }
})();