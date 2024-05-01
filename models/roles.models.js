import { Sequelize, DataTypes } from 'sequelize';

/**
 * Actor model
 * @param {Sequelize} sequelize
 * @returns
 */
export default (sequelize) => {
    const Roles = sequelize.define('roles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: "roles"
    });
    return Roles;
}


