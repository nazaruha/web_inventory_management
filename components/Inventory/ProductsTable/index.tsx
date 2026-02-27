import { FC } from 'react'
import ProductsTableHeader from './parts/ProductsTableHeader'
import {
  ProductsTableList,
  ProductsTableListProps,
} from './parts/ProductsTableList'

export type ProductsTableProps = ProductsTableListProps

export const ProductsTable: FC<ProductsTableProps> = ({ searchParams }) => {
  return (
    <div className="overflow-y-hidden rounded-lg border border-gray-200 bg-white">
      <table className="w-full">
        <ProductsTableHeader />
        <ProductsTableList searchParams={searchParams} />
      </table>
    </div>
  )
}
