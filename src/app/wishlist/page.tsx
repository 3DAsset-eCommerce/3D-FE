import AssetDetail from '@/components/assetDetail/AssetDetail'
import Drawer from '@/components/common/Drawer'
import Layout from '@/components/common/Layout'
import WishContents from '@/components/wishList/WishContents'
export default function WishlistPage() {
  return (
    <Layout>
      <div className=" flex ">
        <div className=" w-full flex-auto p-10">
          <WishContents />
        </div>
        <div className="flex-1">
          <Drawer>
            <AssetDetail />
          </Drawer>
        </div>
      </div>
    </Layout>
  )
}

// 에셋 상세보기

// 에셋미리보기
