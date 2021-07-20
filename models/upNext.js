module.exports = function(sequelize, DataTypes) {
    var UpNext = sequelize.define("upNext", {
      title: DataTypes.STRING,
      posted: DataTypes.DATE,
      summary: DataTypes.STRING,
      link: DataTypes.STRING
    });
    
    return UpNext;
};