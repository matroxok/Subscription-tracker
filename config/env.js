import { config } from 'dotenv'

// dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` })
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` }) // Zmieniona linia wywołania

export const { PORT, NODE_ENV, DB_URI } = process.env
