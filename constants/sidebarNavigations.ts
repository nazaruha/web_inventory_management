import { SidebarNavigation } from '@/types/sidebar-navigation'
import { BarChart3, Package, Plus, Settings } from 'lucide-react'
import { Routes } from './routes'

export const sidebarNavigations: SidebarNavigation[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    href: Routes.DASHBOARD,
    Icon: BarChart3,
    category: 'Main',
  },
  {
    id: 'inventory',
    name: 'Inventory',
    href: Routes.INVENTORY,
    Icon: Package,
    category: 'Inventory',
  },
  {
    id: 'add-product',
    name: 'Add Product',
    href: Routes.ADD_PRODUCT,
    Icon: Plus,
    category: 'Add Product',
  },
  {
    id: 'settings',
    name: 'Settings',
    href: Routes.SETTINGS,
    Icon: Settings,
    category: 'Settings',
  },
] as const
