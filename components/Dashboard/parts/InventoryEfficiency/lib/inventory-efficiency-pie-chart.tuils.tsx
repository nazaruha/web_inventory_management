import { pieChartColors } from '@/constants/pieChartColors'
import { radian } from '@/constants/radian'
import { PieLabelRenderProps, PieSectorShapeProps, Sector } from 'recharts'

export const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  if (
    cx == null ||
    cy == null ||
    innerRadius == null ||
    outerRadius == null ||
    percent === 0
  )
    return null

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const ncx = Number(cx)
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * radian)
  const ncy = Number(cy)
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * radian)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > ncx ? 'start' : 'end'}
      dominantBaseline="central"
      className="text-sm"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  )
}

export const MyCustomPie = (props: PieSectorShapeProps) => {
  return (
    <Sector
      {...props}
      fill={pieChartColors[props.index % pieChartColors.length]}
    />
  )
}
