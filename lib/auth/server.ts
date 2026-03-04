import { createNeonAuth } from '@neondatabase/auth/next/server'
import { Session, User } from '@neondatabase/auth/types'
import { redirect } from 'next/navigation'

export const auth = createNeonAuth({
  baseUrl: process.env.NEON_AUTH_BASE_URL!,
  cookies: {
    secret: process.env.NEON_AUTH_COOKIE_SECRET!,
  },
})

export const requireUser = async (): Promise<{
  user: User
  session: Session
}> => {
  const { data: session } = await auth.getSession()

  if (!session?.user) {
    redirect('/auth/sign-in')
  }

  return session
}
