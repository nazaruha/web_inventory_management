import { LucideIcon } from 'lucide-react'
import React from 'react'

interface MetricCardItemProps {
  value: number | string
  label: string
  Icon: LucideIcon
}

export const MetricCardItem: React.FC<MetricCardItemProps> = ({
  value,
  label,
  Icon,
}) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
      <div className="mt-1 flex items-center justify-center">
        <span className="text-xs text-green-500">+{value}</span>
        <Icon className="ml-2 h-3 w-3 text-green-500" />
      </div>
    </div>
  )
}
