import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
var dbConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: null
};
if (process.env.MODE === "PROD") {
    dbConfig.ssl = {
        rejectUnauthorized: false
    };
}
var Pool = pg.Pool;
var db = new Pool(dbConfig);
export default db;
