const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'db-mqtt-project.claqaqyky13d.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Fridayabi2005',
  database: 'Tienda',
  port: 3036,
});

const promisePool = pool.promise();

module.exports = promisePool;
