import ProductsTableHeader from './parts/ProductsTableHeader'
import ProductsTableList from './parts/ProductsTableList'

export default function ProductsTable() {
  return (
    <div className="overflow-y-hidden rounded-lg border border-gray-200 bg-white">
      <table className="w-full">
        <ProductsTableHeader />
        <ProductsTableList />
      </table>
    </div>
  )
}
