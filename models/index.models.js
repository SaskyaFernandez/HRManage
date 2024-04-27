import { Sequelize } from 'sequelize';
import user from './users.models.js';
import holiday from './holidays.models.js';
const sequelize = new Sequelize(process.env.DB_URI);

// The "db" object
//* Initialization
const db = {};

//* Injecting the sequelize instance
db.sequelize = sequelize;

//* Add models
db.Users = user(sequelize);
db.holidays = holiday(sequelize);

//* Export DB object
export default db;

(async () => {
    try {
        await sequelize.authenticate();

    } catch (error) {
        console.error('Unable to connect to database :', error);
    }
})();