import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb',
    connectionLimit: 5,
  });
  
  export async function query(sql, params) {
    const conn = await pool.getConnection();
    try {
      return await conn.query(sql, params);
    } finally {
      conn.release();
    }
  }
export default pool