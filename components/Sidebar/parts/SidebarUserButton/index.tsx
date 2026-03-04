import { UserButton } from '@neondatabase/auth/react'

const SidebarUserButton = () => {
  return (
    <div className="absolute right-0 bottom-0 left-0 border-t border-gray-800 px-4 py-4">
      <div className="flex items-center justify-center">
        <UserButton size="default" className="bg-gray-800" />
      </div>
    </div>
  )
}

export default SidebarUserButton
