import { ProductsSearchBy } from '@/types/productsSearchBy'

export const productSearchByList: ProductsSearchBy[] = [
  { value: 'name', name: 'Name' },
  { value: 'sku', name: 'SKU' },
  { value: 'description', name: 'Description' },
  { value: 'price', name: 'Price' },
  { value: 'quantity', name: 'Quantity' },
  { value: 'lowStockAt', name: 'Low Stock At' },
  { value: 'createdAt', name: 'Created At' },
  { value: 'updatedAt', name: 'Updated At' },
]
