import ProductsSearchForm from '@/components/Inventory/ProductsSearchForm'
import { ProductsTable } from '@/components/Inventory/ProductsTable'
import Header from '@/components/ui/Header'
import { ProductsSearchByValue } from '@/types/productsSearchByValue'

export default async function InventoryPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string; searchBy: ProductsSearchByValue }>
}) {
  console.log('Search Params')
  console.log(await searchParams)

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
