// db.js

import { Sequelize } from 'sequelize';
import user from './users.models.js';
import holiday from './holidays.models.js';
import roles from './roles.models.js';
import userRoles from './UserRoles.models.js';

const sequelize = new Sequelize(process.env.DB_URI);

const db = {};
db.sequelize = sequelize;

db.Users = user(sequelize);
db.Holidays = holiday(sequelize);
db.Roles = roles(sequelize);
db.UserRoles = userRoles(sequelize, db);

// Définir la relation one-to-many
db.Users.hasMany(db.Holidays, { foreignKey: 'userid' });

// Définir la relation many-to-many
db.Users.belongsToMany(db.Roles, { through: db.UserRoles, foreignKey: 'userid' });
db.Roles.belongsToMany(db.Users, { through: db.UserRoles, foreignKey: 'roleid' });

export default db;
