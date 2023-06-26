import Layout from '@/components/common/Layout'
import CartTable from '@/components/cart/CartTable'
import CartInfo from '@/components/cart/CartInfo'
import Title from '@/components/common/Title'

export default function CartPage() {
  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-7.2rem)] pt-[2.4rem] text-neutral-navy-100">
        <div className="w-[74.82%] px-[2.2rem] py-[4rem]">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <Title tit="장바구니" mb={0} />
              <p className="ml-[0.8rem] text-sl text-neutral-navy-200">
                &#40;<span className="text-primary-main">2</span>/4&#41;
              </p>
            </div>
            <div className="flex">
              <button className="h-[2.8rem] w-[12rem] rounded-sm border border-transparent-navy-30 text-sm">
                전체 삭제
              </button>
              <button className="ml-[1.6rem] h-[2.8rem] w-[12rem] rounded-sm border border-transparent-navy-30 text-sm">
                선택 항목 삭제
              </button>
            </div>
          </div>
          <CartTable />
        </div>
        <CartInfo />
      </div>
    </Layout>
  )
}
