'use strict';

const DBConfig = require('../config/config');
const pool = DBConfig.pool;


exports.signup = () => {
  return new Promise((resolve, reject) => {
    const sql = ``;

    pool.query(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  })
};

exports.login = () => {
  return new Promise((resolve, reject) => {
    const sql = ``;

    pool.query(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};