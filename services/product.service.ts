import { Prisma } from '@/app/generated/prisma/client'
import { defaultLowStockAt } from '@/constants/defaultLowStockAt'
import { requireUser } from '@/lib/auth/server'
import prisma from '@/lib/prisma'
import { InventoryPageSearchParams } from '@/types/inventoryPageSearchParams'

export const getTotalProductCount = async (userId: string) => {
  const count = await prisma.product.count({ where: { userId } })

  return count
}

export const getLowStockProductCount = async (
  userId: string,
  lowStockThreshold: number = defaultLowStockAt,
) => {
  const count = await prisma.product.count({
    where: {
      userId,
      lowStockAt: { not: null },
      quantity: { lte: lowStockThreshold, gt: 0 },
    },
  })

  return count
}

export const getInStockProductCount = async (
  userId: string,
  lowStockThreshold: number = defaultLowStockAt,
) => {
  const count = await prisma.product.count({
    where: {
      userId,
      lowStockAt: { not: null },
      quantity: { gt: lowStockThreshold },
    },
  })

  return count
}

export const getOutStockProductCount = async (userId: string) => {
  const count = await prisma.product.count({
    where: {
      userId,
      quantity: 0,
    },
  })

  return count
}

export const getLimitedProductsByOrder = async (
  userId: string,
  order: 'asc' | 'desc' = 'asc',
  limit: number = 5,
) => {
  const products = await prisma.product.findMany({
    where: { userId },
    orderBy: { createdAt: order },
    take: limit,
  })

  return products
}

export const getTotalInventoryValue = async (userId: string) => {
  const products = await prisma.product.findMany({
    where: { userId },
    select: { price: true, quantity: true },
  })

  return products.reduce((total, product) => {
    return total + Number(product.price) * product.quantity
  }, 0)
}

export const getAllProductsByUserId = async (userId: string) => {
  return await prisma.product.findMany({ where: { userId } })
}

export const getFilterForProducts = async (
  searchParams: InventoryPageSearchParams,
): Promise<Prisma.ProductWhereInput> => {
  const { user } = await requireUser()

  const where: Prisma.ProductWhereInput = { userId: user.id }

  if (searchParams?.query && searchParams.searchBy) {
    const { query, searchBy } = searchParams

    if (searchBy === 'createdAt' || searchBy === 'updatedAt') {
      where[searchBy] = { gte: new Date(query) }
    } else if (['price', 'quantity', 'lowStockAt'].includes(searchBy)) {
      where[searchBy] = Number(query)
    } else {
      where[searchBy] = {
        contains: query,
        mode: 'insensitive',
      }
    }
  }

  return where
}
