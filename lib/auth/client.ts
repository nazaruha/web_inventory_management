'use client'

import { createAuthClient } from '@neondatabase/auth/next'
import { Session, User } from '@neondatabase/auth/types'
import { redirect } from 'next/navigation'

export const authClient = createAuthClient()

export const requireUserClient = async (): Promise<{
  user: User
  session: Session
}> => {
  const { data: session } = await authClient.getSession()

  if (!session?.user) {
    redirect('/auth/sign-in')
  }

  return session
}
