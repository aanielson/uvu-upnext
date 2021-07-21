module.exports = function(sequelize, DataTypes) {
    var upNext = sequelize.define("upNext", {
      title: DataTypes.STRING,
      posted: DataTypes.DATE,
      summary: DataTypes.STRING,
      link: DataTypes.STRING
    },{
      tableName: "upNext",
      timestamps: false
    });
    
    return upNext;
};