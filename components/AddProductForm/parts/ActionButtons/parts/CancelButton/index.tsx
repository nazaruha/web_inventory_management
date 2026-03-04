import { Routes } from '@/constants/routes'
import Link from 'next/link'

export default function CancelButton() {
  return (
    <Link
      href={Routes.DASHBOARD}
      className="rounded-lg bg-gray-200 px-6 py-3 text-gray-800 hover:bg-gray-300"
    >
      Cancel
    </Link>
  )
}
