'use client'

import { useState } from 'react'
import ProductsSearchButton from './parts/ProductsSearchButton'

import { Routes } from '@/constants/routes'
import { ProductsSearchInputType } from '@/types/productsSearchInputType'
import { ProductsSearchBy } from './parts/ProductsSearchBy'
import { ProductsSearchInput } from './parts/ProductsSearchInput'

export default function ProductsSearchForm() {
  const [inputType, setInputType] = useState<ProductsSearchInputType>('text')

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <form action={Routes.INVENTORY} method="GET" className="flex gap-2">
        <ProductsSearchInput type={inputType} />
        <ProductsSearchBy setInputType={setInputType} />
        <ProductsSearchButton />
      </form>
    </div>
  )
}
