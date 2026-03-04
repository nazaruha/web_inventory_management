import AddProductForm from '@/components/AddProductForm'
import Header from '@/components/ui/Header'
import { requireUser } from '@/lib/auth/server'

export default async function AddProductPage() {
  const { user } = await requireUser()

  return (
    <main className="ml-70 p-8">
      <Header
        title="Add Product"
        description={`Add a new product to your inventory, ${user.name}!`}
      />
      <AddProductForm />
    </main>
  )
}
