'use server'

import { Routes } from '@/constants/routes'
import { ProductSchema } from '@/zod/zod.schemas'
import { redirect } from 'next/navigation'
import { requireUser } from '../auth/server'
import prisma from '../prisma'

export async function deleteProduct(formData: FormData) {
  const { user } = await requireUser()
  const id = String(formData.get('id') || '')

  await prisma.product.deleteMany({ where: { id: id, userId: user.id } })
}

export async function createProduct(formData: FormData) {
  const { user } = await requireUser()

  const parsed = ProductSchema.safeParse({
    name: formData.get('name'),
    price: formData.get('price'),
    quantity: formData.get('quantity'),
    sku: formData.get('sku'),
    description: formData.get('description') || undefined,
    lowStockAt: formData.get('lowStockAt') || undefined,
  })

  if (!parsed.success) throw new Error('Data validation failed')

  try {
    await prisma.product.create({
      data: { ...parsed.data, userId: user.id },
    })
  } catch (error) {
    throw new Error(`Product creation error: ${error}`)
  } finally {
    redirect(Routes.INVENTORY)
  }
}
