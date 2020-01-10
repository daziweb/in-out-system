module.exports = {
  database: 'in-out-system',
  username: 'root',
  password: 'qweasdzxcv123456789',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    freezeTableName: true,
    timestamps: false,
    paranoid: false,
    operatorsAliases: false,
    deletedAt: true
  }
};