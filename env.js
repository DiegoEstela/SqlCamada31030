require ("dotenv").config();
export const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
export const DATABASE_PORT = process.env.DATABASE_PORT || "3306";
export const DATABASE_USER = process.env.DATABASE_USER || "root";
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "";
export const DATABASE_NAME = process.env.DATABASE_NAME || "productos_db";