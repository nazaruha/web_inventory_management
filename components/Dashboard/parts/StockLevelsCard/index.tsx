import { CardWrapper } from '@/components/ui/CardWrapper'
import { requireUser } from '@/lib/auth/server'
import { getLimitedProductsByOrder } from '@/services/product.service'
import StockLevelCardItem from './parts/StockLevelCardItem'

export default async function StockLevelsCard() {
  const { user } = await requireUser()

  const recentProducts = await getLimitedProductsByOrder(user.id, 'desc')

  return (
    <CardWrapper title="Stock Levels" titleClassName="text-lg">
      <div className="space-y-3">
        {recentProducts.map((item) => (
          <StockLevelCardItem key={item.id} product={item} />
        ))}
      </div>
    </CardWrapper>
  )
}
