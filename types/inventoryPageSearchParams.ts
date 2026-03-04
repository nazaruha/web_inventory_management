import { ProductsSearchByValue } from './productsSearchByValue'

export interface InventoryPageSearchParams {
  query?: string
  searchBy?: ProductsSearchByValue
  page?: number
}
