import { pool, prisma } from '@/lib/prisma'
import 'dotenv/config'

const createProducts = async () => {
  const userId = '6b8a38a5-6b8b-4856-9fd0-e18df0782b01'
  const productCount = 23

  await prisma.product.createMany({
    data: Array.from({ length: productCount }, (_, i) => ({
      userId,
      name: `Product ${i + 1}`,
      sku: `SKU-${i + 1}`,
      description: `Description for Product ${i + 1}`,
      price: (i + 1) * 10,
      quantity: (i + 1) * 5,
      lowStockAt: 5,
      createdAt: new Date(
        Date.now() - (productCount - i) * 1000 * 60 * 60 * 24,
      ),
    })),
  })

  console.log('Seed data inserted successfully.')
  console.log(`Inserted ${productCount} products for user ID: ${userId}`)
}

export async function main() {
  console.log('Starting seed script...')
  await createProducts()
}

main()
  .catch((e) => {
    console.error('Seed Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    await pool.end() // IMPORTANT: Close the PG pool or the script will hang
  })
