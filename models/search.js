module.exports = function(sequelize, DataTypes) {
    var Search = sequelize.define("searches", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        searchId: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    });
    return Search;
};