import { productsTableHeaderList } from '@/constants/productsTableHeaderList'

export default function ProductsTableHeader() {
  return (
    <thead className="bg-gray-50">
      <tr>
        {productsTableHeaderList.map((item, key) => (
          <th
            key={key}
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  )
}
