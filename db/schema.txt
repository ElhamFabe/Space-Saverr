const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(/* ... */);
const queryInterface = sequelize.getQueryInterface();

var query = queryInterface.createTable('Search', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING, 
                allowNull: false
            }, 
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false
            },
            imgUrl: {
                type: DataTypes.STRING,
                allowNull: false
            }, 
            item_description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            discount: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            price: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            ranking: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            }
        });

module.exports = query;