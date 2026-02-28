import prisma from '@/lib/prisma'
import { getFilterForProducts } from '@/services/product.service'
import { ProductsSearchByValue } from '@/types/productsSearchByValue'
import { FC } from 'react'
import ProductsTableHeader from './parts/ProductsTableHeader'
import { ProductsTableList } from './parts/ProductsTableList'

interface ProductsTableProps {
  searchParams: Promise<{ query: string; searchBy: ProductsSearchByValue }>
}

export const ProductsTable: FC<ProductsTableProps> = async ({
  searchParams,
}) => {
  const where = await getFilterForProducts(searchParams)

  const productList = await prisma.product.findMany({ where })

  return (
    <div className="overflow-y-hidden rounded-lg border border-gray-200 bg-white">
      <table className="w-full">
        <ProductsTableHeader />
        <ProductsTableList productList={productList} />
      </table>
    </div>
  )
}
