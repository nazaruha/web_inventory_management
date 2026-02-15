import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import 'dotenv/config';

// Neon requires SSL. This setup ensures the pool is ready before Prisma starts.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true, // Explicitly enforce SSL for Neon
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

export async function main() {
  const userId = '6b8a38a5-6b8b-4856-9fd0-e18df0782b01';
  const productCount = 23;

  await prisma.product.createMany({
    data: Array.from({ length: productCount }, (_, i) => ({
      userId,
      name: `Product ${i + 1}`,
      sku: `SKU-${i + 1}`,
      description: `Description for Product ${i + 1}`,
      price: (i + 1) * 10,
      quantity: (i + 1) * 5,
      lowStockAt: 5,
      createdAt: new Date(Date.now() - (productCount - i) * 1000 * 60 * 60 * 24),
    })),
  });

  console.log("Seed data inserted successfully.");
  console.log(`Inserted ${productCount} products for user ID: ${userId}`)
}

main()
  .catch((e) => {
    console.error("Seed Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end(); // IMPORTANT: Close the PG pool or the script will hang
  });