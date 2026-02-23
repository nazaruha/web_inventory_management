import { StockStatus } from '@/types/stockStatus'

export const stockColors: Record<StockStatus, { bg: string; text: string }> = {
  'out of stock': { bg: 'bg-red-100', text: 'text-red-800' },
  'low stock': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  'in stock': { bg: 'bg-green-100', text: 'text-green-800' },
}
