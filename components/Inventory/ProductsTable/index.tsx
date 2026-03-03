import { productsTablePageSize } from '@/constants/productsTablePageSize'
import { Routes } from '@/constants/routes'
import prisma from '@/lib/prisma'
import { getFilterForProducts } from '@/services/product.service'
import { InventoryPageSearchParams } from '@/types/inventoryPageSearchParams'
import { FC } from 'react'
import ProductsTableHeader from './parts/ProductsTableHeader'
import { ProductsTableList } from './parts/ProductsTableList'
import { ProductsTablePagination } from './parts/ProductsTablePagination'

interface ProductsTableProps {
  searchParams: Promise<InventoryPageSearchParams>
}

export const ProductsTable: FC<ProductsTableProps> = async ({
  searchParams,
}) => {
  const params = await searchParams
  const where = await getFilterForProducts(params)
  const page = Math.max(1, Number(params.page ?? 1))

  const [totalCount, productList] = await Promise.all([
    await prisma.product.count({ where }),
    await prisma.product.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * productsTablePageSize,
      take: productsTablePageSize,
    }),
  ])

  const totalPages = Math.max(1, Math.ceil(totalCount / productsTablePageSize))

  return (
    <>
      <div className="overflow-y-hidden rounded-lg border border-gray-200 bg-white">
        <table className="w-full">
          <ProductsTableHeader />
          <ProductsTableList productList={productList} />
        </table>
      </div>
      {totalPages > 1 && (
        <ProductsTablePagination
          currentPage={page}
          totalPages={totalPages}
          baseUrl={Routes.INVENTORY}
          searchParams={{
            query: params.query ?? '',
            searchBy: params.searchBy ?? '',
            pageSize: String(productsTablePageSize),
          }}
        />
      )}
    </>
  )
}
