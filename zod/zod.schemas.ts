import z from 'zod'

export const ProductSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  price: z.coerce.number().nonnegative("Price mustn't be negative"),
  quantity: z.coerce.number().int().min(0, "Quantity mustn't be negative"),
  sku: z.string().min(1, 'SKU is required'),
  description: z.string().optional(),
  lowStockAt: z.coerce.number().int().min(0).optional(),
})
