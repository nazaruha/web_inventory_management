import ProductsTable from '@/components/Inventory/ProductsTable'
import Header from '@/components/ui/Header'

export default function InventoryPage() {
  return (
    <main className="ml-70 p-8">
      <Header
        title="Inventory"
        description="Manage your products and track inventory levels."
      />
      <div className="space-y-6">
        {/* Search bar */}

        {/* Products Table */}
        <ProductsTable />
      </div>
    </main>
  )
}
