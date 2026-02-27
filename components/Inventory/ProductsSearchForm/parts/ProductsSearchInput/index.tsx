import { ProductsSearchInputType } from '@/types/productsSearchInputType'
import { FC } from 'react'

interface ProductsSearchInputProps {
  type: ProductsSearchInputType
}

export const ProductsSearchInput: FC<ProductsSearchInputProps> = ({ type }) => {
  return (
    <input
      type={type}
      name="query"
      placeholder="Search products..."
      className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent"
    />
  )
}
