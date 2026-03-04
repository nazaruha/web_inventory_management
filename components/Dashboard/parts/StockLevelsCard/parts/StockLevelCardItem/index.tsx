import { Product } from '@/app/generated/prisma/client'
import { stockColors } from '@/constants/stockColors'
import { getStockStatus } from '@/lib/getStockStatus'

interface StockLevelCardItemProps {
  product: Product
}

export default function StockLevelCardItem({
  product,
}: StockLevelCardItemProps) {
  const stockStatus = getStockStatus(product.quantity, product.lowStockAt)

  return (
    <div
      key={product.id}
      className="flex items-center justify-between border-b border-gray-100 pb-2"
    >
      <div className="flex items-center space-x-3">
        <div
          className={`h-3 w-3 rounded-full ${stockColors[stockStatus].bg}`}
        />
        <span className="text-sm font-medium text-gray-900">
          {product.name}
        </span>
      </div>
      <div className={`text-sm font-medium ${stockColors[stockStatus].text}`}>
        {product.quantity} units
      </div>
    </div>
  )
}
