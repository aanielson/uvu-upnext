module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      event_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imgName: DataTypes.STRING,
      imgAlt: DataTypes.STRING,
      event_date: DataTypes.DATE,
      event_description: DataTypes.STRING,
    },{
      tableName: "events",
      timestamps: false
    });
    
    return Event;
};
  