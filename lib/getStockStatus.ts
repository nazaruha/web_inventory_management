import { defaultLowStockAt } from '@/constants/defaultLowStockAt'
import { StockStatus } from '@/types/stockStatus'

export const getStockStatus = (
  quantity: number,
  lowStockAt: number | null,
): StockStatus => {
  const threshold = lowStockAt ?? defaultLowStockAt

  if (quantity === 0) return 'out of stock'

  if (quantity <= threshold) return 'low stock'

  return 'in stock'
}
