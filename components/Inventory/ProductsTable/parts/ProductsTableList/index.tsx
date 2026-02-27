import { requireUser } from '@/lib/auth/server'
import { getAllProductsByUserId } from '@/services/product.service'
import { ProductsSearchByValue } from '@/types/productsSearchByValue'
import { FC } from 'react'
import { ProductsTableListItem } from './parts/ProductsTableListItem'

export interface ProductsTableListProps {
  searchParams: Promise<{ query: string; searchBy: ProductsSearchByValue }>
}

export const ProductsTableList: FC<ProductsTableListProps> = async ({
  searchParams,
}) => {
  const { user } = await requireUser()

  const productList = await getAllProductsByUserId(user.id, searchParams)

  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {productList.map((item, key) => (
        <ProductsTableListItem item={item} key={key} />
      ))}
    </tbody>
  )
}
