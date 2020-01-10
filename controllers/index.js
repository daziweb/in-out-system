const Record = require('../models/index');

const list = async ctx => {
  try {

    ctx.body = await Record.findAll();

  } catch (e) {
    ctx.body = e;
  }
};

module.exports = { list };