import AssetDetail from '@/components/assetDetail/AssetDetail'
import CategoryAssetList from '@/components/category/CategoryAssetList'
import Drawer from '@/components/common/Drawer'
import Layout from '@/components/common/Layout'

export default function CategoriyPage() {
  return (
    <Layout>
      <div className="flex">
        <div className="h-[100%] w-full">
          <CategoryAssetList />
        </div>
        <Drawer>
          <AssetDetail />
        </Drawer>
      </div>
    </Layout>
  )
}
