import AssetDetail from '@/components/assetDetail/AssetDetail'
import Drawer from '@/components/common/Drawer'
import Layout from '@/components/common/Layout'
import { MyAssetContents } from '@/components/myasset/MyAssetContents'
import { MyAssetFooter } from '@/components/myasset/MyAssetFooter'

export default function MyAssetsPage() {
  return (
    <Layout>
      <div className="flex h-full ">
        <div className="w-full flex-auto p-10">
          <MyAssetContents />
        </div>
        <div className="flex-1">
          <Drawer>
            <AssetDetail />
          </Drawer>
        </div>
      </div>
      <MyAssetFooter />
    </Layout>
  )
}
