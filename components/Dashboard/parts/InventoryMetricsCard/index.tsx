import { CardWrapper } from '@/components/ui/CardWrapper'
import { requireUser } from '@/lib/auth/server'
import {
  getLowStockProductCount,
  getTotalInventoryValue,
  getTotalProductCount,
} from '@/services/product.service'
import { TrendingUpIcon } from 'lucide-react'
import { MetricCardItem } from './parts/MetricCardItem'

export default async function InventoryMetricsCard() {
  const { user } = await requireUser()

  const totalProducts = await getTotalProductCount(user.id)
  const totalInventoryValue = await getTotalInventoryValue(user.id)
  const lowStockProducts = await getLowStockProductCount(user.id)

  return (
    <CardWrapper title="Inventory Metrics" titleClassName="text-lg">
      <div className="grid grid-cols-3 gap-6">
        <MetricCardItem
          value={totalProducts}
          label="Total Products"
          Icon={TrendingUpIcon}
        />
        <MetricCardItem
          value={`$${totalInventoryValue.toFixed(0)}`}
          label="Total Value"
          Icon={TrendingUpIcon}
        />
        <MetricCardItem
          value={lowStockProducts}
          label="Low Stock"
          Icon={TrendingUpIcon}
        />
      </div>
    </CardWrapper>
  )
}
