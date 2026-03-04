import { CardWrapper } from '@/components/ui/CardWrapper'
import { requireUser } from '@/lib/auth/server'
import { getWeeklyProducts } from '@/lib/getWeeklyProducts'
import { getAllProductsByUserId } from '@/services/product.service'
import { ProductsChart } from './parts/ProductsChart'

export default async function ProductsChartCard() {
  const { user } = await requireUser()

  const weeklyProducts = getWeeklyProducts(
    await getAllProductsByUserId(user.id),
  )

  return (
    <CardWrapper title="New products per week" titleClassName="text-lg">
      <ProductsChart data={weeklyProducts} />
    </CardWrapper>
  )
}
