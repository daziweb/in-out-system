const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize.db');
const Model = Sequelize.Model;

class Record extends Model {
}

Record.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
}, {
  sequelize,
  modelName: 'record'
});

Record.sync();

module.exports = Record;