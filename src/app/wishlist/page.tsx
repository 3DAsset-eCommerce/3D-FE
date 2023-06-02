import Layout from '@/components/common/Layout'
import WishButtons from '@/components/wishList/WishButtons'
import WishTable from '@/components/wishList/WishTable'
export default function WishlistPage() {
  const pageNumber = 1
  return (
    <Layout>
      <div className='pt-20 px-10'>
        <div className="flex items-center justify-between ">
          <div className="gap-2">
            <span className="text-lg font-bold text-white">위시리스트 </span>
            <span className="text-base text-white">
              (<span className="text-base text-primary-main">{pageNumber}</span>
              /10)
            </span>
          </div>
          <WishButtons />
        </div>
        <div className="bg-transparent-navy-30 py-96">
          <WishTable />
        </div>
      </div>
    </Layout>
  )
}

// 에셋 상세보기

// 에셋미리보기
