'use server'

import { requireUser } from '../auth/server'
import prisma from '../prisma'

export async function deleteProduct(formData: FormData) {
  const { user } = await requireUser()
  const id = String(formData.get('id') || '')

  await prisma.product.deleteMany({ where: { id: id, userId: user.id } })
}
