import { Product } from '@/app/generated/prisma/client'
import { ProductsChartData } from '@/types/productsChartData'

export const getWeeklyProducts = (products: Product[]): ProductsChartData[] => {
  const currentDate = new Date()
  const weeklyProducts: ProductsChartData[] = []

  for (let week = 11; week >= 0; week--) {
    const weekStart = getWeekStart(currentDate, week)
    const weekEnd = getWeekEnd(weekStart)
    const weekLabel = `${String(weekStart.getMonth() + 1).padStart(2, '0')}/${String(weekStart.getDate() + 1).padStart(2, '0')}`
    const weeklyProductsCount = getWeeklyProductsCount(
      products,
      weekStart,
      weekEnd,
    )

    weeklyProducts.push({
      week: weekLabel,
      productsCount: weeklyProductsCount,
    })
  }

  return weeklyProducts
}

function getWeekStart(currentDate: Date, week: number) {
  const weekStart = new Date(currentDate)
  weekStart.setDate(weekStart.getDate() - week * 7)
  weekStart.setHours(0, 0, 0, 0)

  return weekStart
}

function getWeekEnd(weekStart: Date) {
  const weekEnd = new Date(weekStart)
  weekEnd.setDate(weekEnd.getDate() + 6)
  weekEnd.setHours(23, 59, 59, 999)

  return weekEnd
}

function getWeeklyProductsCount(
  products: Product[],
  weekStart: Date,
  weekEnd: Date,
) {
  return products.filter((product) => {
    const productDate = new Date(product.createdAt)
    return productDate >= weekStart && productDate <= weekEnd
  }).length
}
