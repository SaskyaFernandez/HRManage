import {  DataTypes } from 'sequelize';
import usersModels from './users.models.js';

/**
 * Modèle d'Acteur
 * @param {Sequelize} sequelize
 * @returns
 */
export default (sequelize) => {

    const Holiday = sequelize.define('holiday', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userid: {
            type: DataTypes.INTEGER,
            references: {
                model: usersModels,
                key: 'id',
            },
        },
        startdate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        enddate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        isaccepted: {
            type: DataTypes.BOOLEAN
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: "holiday"
    });
    return Holiday;
}
