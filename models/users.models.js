import { Sequelize, DataTypes } from 'sequelize';

/**
 * Actor model
 * @param {Sequelize} sequelize
 * @returns
 */
export default (sequelize) => {

    const Users = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        entrydate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        isdeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        maxholidays: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        holidaysleft: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: "users"
    });
    return Users;
}


