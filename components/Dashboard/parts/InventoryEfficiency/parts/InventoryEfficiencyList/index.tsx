import { requireUser } from '@/lib/auth/server'
import { getTotalProductCount } from '@/services/product.service'
import { InventoryEfficiencyData } from '@/types/inventoryEfficiencyData'
import { FC } from 'react'
import { InventoryEfficiencyListItem } from './parts/InventoryEfficiencyListItem'

interface InventoryEfficiencyListProps {
  data: InventoryEfficiencyData[]
}

export const InventoryEfficiencyList: FC<
  InventoryEfficiencyListProps
> = async ({ data }) => {
  const { user } = await requireUser()

  const totalProductsCount = await getTotalProductCount(user.id)

  return (
    <div className="mt-3 space-y-2 ps-3">
      {data.map((item, key) => (
        <InventoryEfficiencyListItem
          key={key}
          item={item}
          totalProductsCount={totalProductsCount}
        />
      ))}
    </div>
  )
}
