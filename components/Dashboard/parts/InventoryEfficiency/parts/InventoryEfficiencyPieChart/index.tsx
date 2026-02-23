'use client'

import { InventoryEfficiencyData } from '@/types/inventoryEfficiencyData'
import { RechartsDevtools } from '@recharts/devtools'
import { FC } from 'react'
import { Pie, PieChart } from 'recharts'
import {
  MyCustomPie,
  renderCustomizedLabel,
} from '../../lib/inventory-efficiency-pie-chart.tuils'
interface InventoryEfficiencyPieChartProps {
  data: InventoryEfficiencyData[]
}

export const InventoryEfficiencyPieChart: FC<
  InventoryEfficiencyPieChartProps
> = ({ data }) => {
  return (
    <PieChart
      style={{
        width: '100%',
        aspectRatio: 2.7,
        maxWidth: 600,
      }}
      responsive
    >
      <Pie
        data={data}
        labelLine={false}
        label={renderCustomizedLabel}
        dataKey="value"
        isAnimationActive
        shape={MyCustomPie}
      />
      <RechartsDevtools />
    </PieChart>
  )
}
