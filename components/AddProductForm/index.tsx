import { createProduct } from '@/lib/actions/products'
import ActionButtons from './parts/ActionButtons'
import { InputGroup } from './parts/InputGroup'

export default function AddProductForm() {
  return (
    <div className="max-w-2xl">
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <form action={createProduct} className="space-y-6">
          <InputGroup
            id="name"
            name="name"
            label="Name"
            required
            placeholder="Enter product name"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <InputGroup
              id="price"
              name="price"
              label="Price"
              type="number"
              min={0}
              step={0.01}
              required
              placeholder="0.00"
            />
            <InputGroup
              id="quantity"
              name="quantity"
              label="Quantity"
              type="number"
              min={0}
              required
              placeholder="0"
            />
          </div>
          <InputGroup
            id="sku"
            name="sku"
            label="SKU"
            required
            placeholder="Enter product SKU"
          />
          <InputGroup
            id="description"
            name="description"
            label="Description"
            type="textarea"
            placeholder="Enter product description"
          />
          <InputGroup
            id="lowStockAt"
            name="lowStockAt"
            label="Low Stock at"
            type="number"
            min={0}
            placeholder="Enter low stock threshold"
          />
          <ActionButtons />
        </form>
      </div>
    </div>
  )
}
