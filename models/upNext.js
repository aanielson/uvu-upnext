module.exports = function(sequelize, DataTypes) {
    var upNext = sequelize.define("upNext", {
      title: DataTypes.STRING,
      posted: {
        type: DataTypes.TIMESTAMP,
        defaultValue: CURRENT_TIMESTAMP
      },
      summary: DataTypes.STRING,
      link: DataTypes.STRING
    });
    
    return upNext;
};