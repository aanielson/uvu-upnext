module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      event_name: DataTypes.STRING,
      event_date: DataTypes.DATETIME,
      event_description: DataTypes.STRING,
      upcoming: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    });
    
    return Event;
};
  