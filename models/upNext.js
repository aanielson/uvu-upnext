module.exports = function(sequelize, DataTypes) {
    var upNext = sequelize.define("upNext", {
      title: DataTypes.STRING,
      imgName: DataTypes.STRING,
      imgAlt: DataTypes.STRING,
      posted: DataTypes.DATE,
      summary: DataTypes.STRING,
      link: DataTypes.STRING
    },{
      tableName: "upNext",
      timestamps: false
    });
    
    return upNext;
};