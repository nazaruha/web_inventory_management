import Sidebar from '@/components/Sidebar'
import { Routes } from '@/constants/routes'
import { requireUser } from '@/lib/auth/server'

export const dynamic = 'force-dynamic'

export default async function InventoryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await requireUser()

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath={Routes.INVENTORY} />
      {children}
    </div>
  )
}
