import ProductsSearchForm from '@/components/Inventory/ProductsSearchForm'
import { ProductsTable } from '@/components/Inventory/ProductsTable'
import Header from '@/components/ui/Header'
import { InventoryPageSearchParams } from '@/types/inventoryPageSearchParams'

export default async function InventoryPage({
  searchParams,
}: {
  searchParams: Promise<InventoryPageSearchParams>
}) {
  return (
    <main className="ml-70 p-8">
      <Header
        title="Inventory"
        description="Manage your products and track inventory levels."
      />
      <div className="space-y-6">
        {/* Search bar */}
        <ProductsSearchForm />
        {/* Products Table */}
        <ProductsTable searchParams={searchParams} />
      </div>
    </main>
  )
}
