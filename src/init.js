// 서버 이외의 것들을 정리하기 위해 둔것
import { checkConnection } from "./db";
import { createDatabaseAndTable } from "./schema/contactSchema";
import app from "./server";

const PORT_NUMBER = 4000;

// Check the database connection and initialize the schema
const initDB = async () => {
  try {
    await checkConnection(); // Check the connection
    await createDatabaseAndTable(); // Create database and table if not exist
  } catch (error) {
    console.error("Failed to initialize the application:", error);
  }
};

const handleListening = () =>
  console.log(`iMAES server opened on port ${PORT_NUMBER}👌`);

app.listen(PORT_NUMBER, () => {
  handleListening();
  initDB();
});
