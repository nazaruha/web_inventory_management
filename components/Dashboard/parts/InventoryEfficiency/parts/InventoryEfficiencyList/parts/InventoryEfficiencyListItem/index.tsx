import { stockColors } from '@/constants/stockColors'
import { InventoryEfficiencyData } from '@/types/inventoryEfficiencyData'
import { FC } from 'react'

interface InventoryEfficiencyListItemProps {
  totalProductsCount: number
  item: InventoryEfficiencyData
}

export const InventoryEfficiencyListItem: FC<
  InventoryEfficiencyListItemProps
> = ({ totalProductsCount, item }) => {
  return (
    <div className="flex items-center justify-between text-sm text-gray-600">
      <div className="flex items-center space-x-2">
        <div
          className={`h-3 w-3 rounded-full ${stockColors[item.label].bg}`}
        ></div>
        <span>
          {item.label[0].toUpperCase() + item.label.slice(1)} (
          {Math.round((item.value * 100) / totalProductsCount)}%)
        </span>
      </div>
    </div>
  )
}
