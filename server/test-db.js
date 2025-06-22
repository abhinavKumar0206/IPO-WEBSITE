// test-db.js
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'Hello@world',
  database: 'ipo_db',
  port: 5432
});

pool.query('SELECT * FROM ipos', (err, result) => {
  if (err) {
    console.error('DB Error:', err);
  } else {
    console.log('IPO rows:', result.rows);
  }
  pool.end();
});
