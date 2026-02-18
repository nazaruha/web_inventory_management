import { authClient } from '@/lib/auth/client'
import { NeonAuthUIProvider } from '@neondatabase/auth/react'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NeonAuthUIProvider
          authClient={authClient}
          redirectTo="/"
          emailOTP
          social={{
            providers: ['google', 'github', 'vercel'],
          }}
          credentials={{ forgotPassword: true, rememberMe: true }}
          organization
        >
          <header className="flex h-16 items-center justify-end gap-4 p-4">
            <UserButton size="icon" />
          </header>
          {children}
        </NeonAuthUIProvider>
      </body>
    </html>
  )
}
