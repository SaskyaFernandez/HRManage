// UserRoles.models.js

import { DataTypes } from 'sequelize';

export default (sequelize, db) => {
    const UserRoles = sequelize.define('userroles', {
        userid: {
            type: DataTypes.INTEGER,
            references: {
                model: db.Users,
                key: 'id',
            },
        },
        roleid: {
            type: DataTypes.INTEGER,
            references: {
                model: db.Roles,
                key: 'id',
            },
        },
        startdate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        enddate: {
            type: DataTypes.DATEONLY,
            allowNull: true // Peut être nul selon vos besoins
        },
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: "userroles"
    });

    // Définir les associations avec les modèles Users et Roles
    UserRoles.belongsTo(db.Users, { foreignKey: 'userid' });
    UserRoles.belongsTo(db.Roles, { foreignKey: 'roleid' });

    return UserRoles;
};
