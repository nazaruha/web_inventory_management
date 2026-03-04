import { productSearchByList } from '@/constants/productSearchByList'
import { Dispatch, FC, SetStateAction } from 'react'

interface ProductsSearchByProps {
  setInputType: Dispatch<SetStateAction<'date' | 'text'>>
}

export const ProductsSearchBy: FC<ProductsSearchByProps> = ({
  setInputType,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value

    setInputType(
      value === 'createdAt' || value === 'updatedAt' ? 'date' : 'text',
    )
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <label htmlFor="searchBy" className="text-sm text-gray-500">
        Search by:
      </label>
      <select
        name="searchBy"
        id="searchBy"
        className="rounded-sm border border-gray-300 px-3 py-0.5 focus:border-transparent"
        onChange={handleSelectChange}
      >
        {productSearchByList.map((item, key) => (
          <option key={key} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}
