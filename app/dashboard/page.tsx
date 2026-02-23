import InventoryEfficiency from '@/components/Dashboard/parts/InventoryEfficiency'
import InventoryMetricsCard from '@/components/Dashboard/parts/InventoryMetricsCard'
import ProductsChartCard from '@/components/Dashboard/parts/ProductsChartCard'
import StockLevelsCard from '@/components/Dashboard/parts/StockLevelsCard'
import Header from '@/components/ui/Header'
import { requireUser } from '@/lib/auth/server'

export default async function DashboardPage() {
  const { user } = await requireUser()

  return (
    <main className="ml-64 p-8">
      <Header
        title="Dashboard"
        description={`Welcome back to your inventory dashboard, ${user.name}!`}
      />
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <InventoryMetricsCard />
        <ProductsChartCard />
      </div>
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <StockLevelsCard />
        <InventoryEfficiency />
      </div>
    </main>
  )
}
