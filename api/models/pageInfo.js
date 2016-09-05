'use strict';

module.exports = function(sequelize, DataTypes) {
  var pageInfo = sequelize.define('pageinfo', {
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    description: {
      type: DataTypes.TEXT
    }
  });
  return pageInfo;
};
