'use strict';

const _ = require('lodash');
const utils = require('../utils/migrations');

module.exports = {
  up: function (queryInterface, Sequelize) {
    const pageInfo = _.extend({}, utils.id, utils.timestamps, {
      published: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      description: {
        type: Sequelize.TEXT
      }
    });

    return queryInterface.createTable('pageinfos', pageInfo);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('pageinfos');
  }
};
