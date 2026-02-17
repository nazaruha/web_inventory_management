import SidebarNavigationList from './parts/SidebarNavigationList'
import SidebarTitle from './parts/SidebarTitle'
import SidebarUserButton from './parts/SidebarUserButton'

export default function Sidebar({
  currentPath = '/dashboard',
}: {
  currentPath?: string
}) {
  return (
    <div className="fixed top-0 left-0 z-10 min-h-full w-70 bg-gray-900 p-6 text-white">
      <SidebarTitle />
      <SidebarNavigationList currentPath={currentPath} />
      <SidebarUserButton />
    </div>
  )
}
