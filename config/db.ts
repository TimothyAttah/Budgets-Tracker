const { Pool } = require('pg');

const pool = new Pool({});

module.exports = {
  query: (text: any, params: any) => pool.query(text, params)
}
