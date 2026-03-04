'use client'

import { chartColors } from '@/constants/chartColors'
import { ProductsChartData } from '@/types/productsChartData'
import { FC } from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

interface ProductsChartProps {
  data: ProductsChartData[]
}

export const ProductsChart: FC<ProductsChartProps> = ({ data }) => {
  return (
    <div className="w-full max-w-150">
      <LineChart
        style={{ height: '100%', width: '100%', aspectRatio: 3, maxWidth: 600 }}
        responsive
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="5 5" stroke={chartColors.GRID} />
        <Line
          type="monotone"
          dataKey="productsCount"
          stroke={chartColors.PRIMARY}
          fill={chartColors.PRIMARY}
          fillOpacity={0.2}
          strokeWidth={2}
          dot={{ fill: chartColors.PRIMARY, strokeWidth: 2, r: 2 }}
          activeDot={{ fill: chartColors.PRIMARY, r: 4 }}
        />
        <XAxis
          dataKey="week"
          stroke={chartColors.TEXT}
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke={chartColors.TEXT}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          allowDecimals={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'white',
            border: `1px solid ${chartColors.BORDER}`,
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
          labelStyle={{ color: chartColors.LABEL, fontWeight: '500' }}
        />
      </LineChart>
    </div>
  )
}
