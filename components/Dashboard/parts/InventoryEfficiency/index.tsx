import { CardWrapper } from '@/components/ui/CardWrapper'
import { requireUser } from '@/lib/auth/server'
import {
  getInStockProductCount,
  getLowStockProductCount,
  getOutStockProductCount,
} from '@/services/product.service'
import { InventoryEfficiencyData } from '@/types/inventoryEfficiencyData'
import { InventoryEfficiencyList } from './parts/InventoryEfficiencyList'
import { InventoryEfficiencyPieChart } from './parts/InventoryEfficiencyPieChart'

export default async function InventoryEfficiency() {
  const { user } = await requireUser()

  const outStockProductsCount = await getOutStockProductCount(user.id)
  const lowStockProductsCount = await getLowStockProductCount(user.id)
  const inStockProductsCount = await getInStockProductCount(user.id)

  const data: InventoryEfficiencyData[] = [
    { label: 'out of stock', value: outStockProductsCount },
    { label: 'low stock', value: lowStockProductsCount },
    { label: 'in stock', value: inStockProductsCount },
  ]

  return (
    <CardWrapper title="Efficiency" titleClassName="text-lg">
      <div className="flex items-center justify-center">
        <InventoryEfficiencyPieChart data={data} />
      </div>
      <InventoryEfficiencyList data={data} />
    </CardWrapper>
  )
}
