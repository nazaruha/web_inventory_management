import { requireUser } from '@/lib/auth/server'
import { getAllProductsByUserId } from '@/services/product.service'
import { ProductsTableListItem } from './parts/ProductsTableListItem'

export default async function ProductsTableList() {
  const { user } = await requireUser()

  const productList = await getAllProductsByUserId(user.id)

  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {productList.map((item, key) => (
        <ProductsTableListItem item={item} key={key} />
      ))}
    </tbody>
  )
}
