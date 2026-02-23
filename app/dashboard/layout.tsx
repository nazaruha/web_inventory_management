import Sidebar from '@/components/Sidebar'
import { requireUser } from '@/lib/auth/server'

export const dynamic = 'force-dynamic'

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await requireUser()

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      {children}
    </div>
  )
}
