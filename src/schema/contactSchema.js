// Import the pool from db.js
import { pool } from "../db.js";
import { DATABASE_NAME, TABLE_NAME } from "../variables.js";

// Function to check and create the test database and table if they don't exist
export const createDatabaseAndTable = async () => {
  try {
    const connection = await pool.getConnection();

    // Check if the 'test' database exists
    const [databases] = await connection.query(
      `SHOW DATABASES LIKE '${DATABASE_NAME}';`
    );

    if (databases.length === 0) {
      // 'test' database does not exist, create it
      await connection.query(`CREATE DATABASE ${DATABASE_NAME};`);
      console.log(`Database '${DATABASE_NAME}' created successfully.`);
    } else {
      console.log(`Database '${DATABASE_NAME}' already exists.`);
    }

    // Use the 'test' database
    await connection.query(`USE ${DATABASE_NAME};`);

    // Check if the 'test_table' exists
    const [tables] = await connection.query(
      `SHOW TABLES LIKE '${TABLE_NAME}';`
    );

    if (tables.length === 0) {
      // 'test_table' does not exist, create it
      const createTableQuery = `
          CREATE TABLE ${TABLE_NAME} (
            pk_id INT AUTO_INCREMENT PRIMARY KEY,
            date DATETIME DEFAULT CURRENT_TIMESTAMP,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            query TEXT NOT NULL
          );
        `;
      await connection.query(createTableQuery);
      console.log(`Table '${TABLE_NAME}' created successfully.`);
    } else {
      console.log(`Table '${TABLE_NAME}' already exists.`);
    }

    connection.release(); // Release the connection back to the pool
  } catch (err) {
    console.error("Error creating database or table:", err);
  }
};

export const insertIntoTable = async (name, email, query) => {
  const connection = await pool.getConnection();

  try {
    const insertQuery = `
        INSERT INTO ${TABLE_NAME} (name, email, query)
        VALUES (?, ?, ?);
      `;

    await connection.query(insertQuery, [name, email, query]);

    console.log(`Data inserted successfully into ${TABLE_NAME}`);
  } catch (error) {
    connection.release();
    console.error("Error inserting data:", error);
    throw error;
  } finally {
    connection.release(); // Release the connection back to the pool
  }
};
