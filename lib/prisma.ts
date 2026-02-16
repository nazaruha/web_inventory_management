import { PrismaClient } from '../app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

// Neon requires SSL. This setup ensures the pool is ready before Prisma starts.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true, // Explicitly enforce SSL for Neon
})

const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({
  adapter,
})

export { prisma, pool }
