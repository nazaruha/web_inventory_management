import classNames from 'classnames'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface PaginatinButtonProps {
  href: string
  disabled: boolean
  direction: 'prev' | 'next'
}

export const PaginationButton: FC<PaginatinButtonProps> = ({
  href,
  disabled,
  direction,
}) => {
  return (
    <Link
      href={href}
      aria-disabled={disabled}
      scroll={false}
      className={classNames({
        'flex items-center rounded-lg px-3 py-2 text-sm font-medium': true,
        'cursor-not-allowed bg-gray-100 text-gray-400': disabled,
        'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100':
          !disabled,
      })}
    >
      {direction === 'prev' ? (
        <>
          <ChevronLeft />
          <span>Prev</span>
        </>
      ) : (
        <>
          <span>Next</span>
          <ChevronRight />
        </>
      )}
    </Link>
  )
}
