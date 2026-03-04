import { Routes } from '@/constants/routes'
import { sidebarNavigations } from '@/constants/sidebarNavigations'
import SidebarNavigationListItem from './parts/SidebarNavigationListItem'

interface SidebarNavigationListProps {
  currentPath?: string
}

const SidebarNavigationList: React.FC<SidebarNavigationListProps> = ({
  currentPath = Routes.DASHBOARD,
}) => {
  return (
    <nav className="space-y-1">
      {sidebarNavigations.map((item) => {
        const isActive = currentPath === item.href

        return (
          <SidebarNavigationListItem
            key={item.id}
            item={item}
            isActive={isActive}
          />
        )
      })}
    </nav>
  )
}

export default SidebarNavigationList
