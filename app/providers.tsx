import { Routes } from '@/constants/routes'
import { NeonAuthUIProvider } from '@neondatabase/auth/react'
import { authClient } from '../lib/auth/client'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NeonAuthUIProvider
      authClient={authClient}
      redirectTo={Routes.DASHBOARD}
      emailOTP
      social={{
        providers: ['google', 'github', 'vercel'],
      }}
      credentials={{ forgotPassword: true, rememberMe: true }}
      organization
    >
      {children}
    </NeonAuthUIProvider>
  )
}
