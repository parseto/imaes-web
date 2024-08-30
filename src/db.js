// Get the client
import mysql from "mysql2/promise";
import { CONNECTION_PW, HOST, USER_NAME } from "./variables";

// Create the connection pool. The pool-specific settings are the defaults
export const pool = mysql.createPool({
  host: `${HOST}`, // local인 경우에 127.0.0.1
  user: `${USER_NAME}`,
  password: `${CONNECTION_PW}`,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

// Check the connection
export const checkConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("DB is opened 😊");
    connection.release(); // Don't forget to release the connection back to the pool
  } catch (err) {
    console.error("DB connection failed:", err);
  }
};
