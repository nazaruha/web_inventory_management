import { LucideIcon } from 'lucide-react'

type SidebarsSection = 'Main' | 'Inventory' | 'Add Product' | 'Settings'

export interface SidebarNavigation {
  readonly id: string
  readonly name: string
  readonly href: string
  readonly Icon: LucideIcon
  readonly category: SidebarsSection
}
