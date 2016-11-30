'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    category: DataTypes.STRING,
    image_url: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.post.belongsTo(models.user);
      }
    }
  });
  return post;
};
