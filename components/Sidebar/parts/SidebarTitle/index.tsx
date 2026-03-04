import { BarChart3 } from 'lucide-react'

const SidebarTitle = () => {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center space-x-2">
        <BarChart3 className="h-9 w-9 rounded-md bg-gray-500 p-2" />
        <span className="text-md font-semibold">Inventory App</span>
      </div>
    </div>
  )
}

export default SidebarTitle
