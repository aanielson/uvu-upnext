module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      event_name: {
        type: DataTypes.STRING,
        allowNull: false
      },  
      event_date: DataTypes.DATE,
      event_description: DataTypes.STRING,
    });
    
    return Event;
};
  