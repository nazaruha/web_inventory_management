import { Product } from '@/app/generated/prisma/client'
import { FC } from 'react'
import { ProductsTableListItem } from './parts/ProductsTableListItem'

export interface ProductsTableListProps {
  productList: Product[]
}

export const ProductsTableList: FC<ProductsTableListProps> = async ({
  productList,
}) => {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {productList.map((item, key) => (
        <ProductsTableListItem item={item} key={key} />
      ))}
    </tbody>
  )
}
