import { getPageUrl } from '@/lib/getPageUrl'
import { getVisiblePages } from '@/lib/getVisiblePages'
import { FC } from 'react'
import { PaginationButton } from './parts/PaginationButton'
import { PaginationLinkList } from './parts/PaginationLinkList'

interface ProductsTablePaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
  searchParams: Record<string, string>
}

export const ProductsTablePagination: FC<ProductsTablePaginationProps> = ({
  currentPage,
  totalPages,
  baseUrl,
  searchParams,
}) => {
  if (totalPages <= 1) return null

  const visiblePages = getVisiblePages(currentPage, totalPages)
  const disablePaginationBackwards = currentPage <= 1
  const disabledPaginationForward = currentPage >= totalPages

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-center gap-1">
        <PaginationButton
          href={getPageUrl(currentPage - 1, searchParams, baseUrl)}
          direction="prev"
          disabled={disablePaginationBackwards}
        />
        <PaginationLinkList
          pages={visiblePages}
          baseUrl={baseUrl}
          searchParams={searchParams}
          currentPage={currentPage}
        />
        <PaginationButton
          href={getPageUrl(currentPage + 1, searchParams, baseUrl)}
          direction="next"
          disabled={disabledPaginationForward}
        />
      </div>
    </div>
  )
}
