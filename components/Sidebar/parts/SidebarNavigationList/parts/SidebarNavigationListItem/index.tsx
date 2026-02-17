import { SidebarNavigation } from '@/types/sidebar-navigation'
import classNames from 'classnames'
import Link from 'next/link'

interface SidebarNavigationListItemProps {
  item: SidebarNavigation
  isActive: boolean
}

const SidebarNavigationListItem: React.FC<SidebarNavigationListItemProps> = ({
  item,
  isActive,
}) => {
  return (
    <Link
      href={item.href}
      className={classNames({
        'flex items-center space-x-3 rounded-md px-3 py-2': true,
        'bg-gray-800 text-white': isActive,
        'text-gray-300 hover:bg-gray-800 hover:text-white': !isActive,
      })}
    >
      <item.Icon className="h-5 w-5" />
      <span className="text-sm font-medium">{item.name}</span>
    </Link>
  )
}

export default SidebarNavigationListItem
