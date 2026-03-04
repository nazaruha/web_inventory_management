import { getPageUrl } from '@/lib/getPageUrl'
import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

interface PaginationLinkList {
  pages: (string | number)[]
  currentPage: number
  searchParams: Record<string, string>
  baseUrl: string
}

export const PaginationLinkList: FC<PaginationLinkList> = ({
  pages,
  currentPage,
  searchParams,
  baseUrl,
}) => {
  return (
    <>
      {pages.map((page, key) => {
        if (page === '...') {
          return (
            <span key={key} className="gray-500 px-3 py-2 text-sm">
              {page}
            </span>
          )
        }

        const pageNumber = page as number
        const isCurrentPage = pageNumber === currentPage

        return (
          <Link
            href={getPageUrl(pageNumber, searchParams, baseUrl)}
            scroll={false}
            key={key}
            className={classNames({
              'rounded-lg px-3 py-2 text-sm font-medium': true,
              'bg-purple-600 text-white': isCurrentPage,
              'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100':
                !isCurrentPage,
            })}
          >
            {pageNumber}
          </Link>
        )
      })}
    </>
  )
}
