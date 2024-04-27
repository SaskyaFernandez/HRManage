import { Sequelize, DataTypes } from 'sequelize';

/**
 * Actor model
 * @param {Sequelize} sequelize
 * @returns
 */
export default (sequelize) => {

    const Holiday = sequelize.define('Holiday', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // userid: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: users, // 'Actors' would also work
        //         key: 'id',
        //     },
        // },
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
        tableName: "holiday"
    });
    return Holiday;
}


