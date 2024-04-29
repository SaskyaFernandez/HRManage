import { Sequelize } from 'sequelize';
import user from './users.models.js';
import holiday from './holidays.models.js';

const sequelize = new Sequelize(process.env.DB_URI);

const db = {};
db.sequelize = sequelize;

db.Users = user(sequelize);
db.Holidays = holiday(sequelize);

// Définir la relation one-to-many
db.Users.hasMany(db.Holidays, {
    foreignKey: 'userid'
});

export default db;
