import { createPool } from 'mysql2/promise';

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '902496',
  database: 'calcom',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
