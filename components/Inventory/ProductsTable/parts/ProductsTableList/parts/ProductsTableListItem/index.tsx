import { Product } from '@/app/generated/prisma/client'
import { deleteProduct } from '@/lib/actions/products'
import { FC } from 'react'

interface ProductsTableListItemProps {
  item: Product
}

export const ProductsTableListItem: FC<ProductsTableListItemProps> = async ({
  item,
}) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 text-sm text-gray-500">{item.name}</td>
      <td className="px-6 py-4 text-sm text-gray-500">{item.sku}</td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {item.description || '-'}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {Number(item.price).toFixed(2)}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">{item.quantity}</td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {item.lowStockAt || '-'}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {item.createdAt.toDateString()}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {item.updatedAt.toDateString()}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        <form
          action={async (formData: FormData) => {
            'use server'
            await deleteProduct(formData)
          }}
        >
          <input type="hidden" name="id" value={item.id} />
          <button className="text-red-600">Delete</button>
        </form>
      </td>
    </tr>
  )
}
