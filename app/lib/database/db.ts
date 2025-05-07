import { Pool, PoolClient } from 'pg'

export const connectToDatabase = async (): Promise<PoolClient> => {
	const pool = new Pool({
		host: process.env.DB_HOST || 'aws-0-ap-southeast-1.pooler.supabase.com',
		port: parseInt(process.env.DB_PORT || '6543'),
		database: process.env.DB_NAME || 'postgres',
		user: process.env.DB_USER || 'postgres.chceiitswdiczdpkihvo',
		password: process.env.DB_PASSWORD || '1qGygL29eeXkiGKRKKg6',
		ssl: {
			rejectUnauthorized: false, // Required for Supabase
		},
	})

	try {
		const client = await pool.connect()
		console.log('connected to postgresql database')
		return client
	} catch (error) {
		console.error(
			'error connecting to postgresql database',
			(error as Error).message
		)
		throw error
	}
}

/* import mysql from "mysql2/promise";

export const connectToDatabase = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
  });

  return connection;
}; */
