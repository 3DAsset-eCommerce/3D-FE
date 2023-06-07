import AssetDetail from '@/components/assetDetail/AssetDetail'
import Drawer from '@/components/common/Drawer'
import Layout from '@/components/common/Layout'
import { MyassetButtons } from '@/components/myasset/MyAssetButtons'
import { MyAssetContents } from '@/components/myasset/MyAssetContents'
import { MyAssetContetntsItem } from '@/components/myasset/MyAssetContetntsItem'
import { MyAssetFooter } from '@/components/myasset/MyAssetFooter'
import { MyAssetPagenation } from '@/components/myasset/MyAssetPagenation'

export default function MyAssetsPage() {
  return (
    <Layout>
      <div className="flex ">
        <div className="w-full flex-auto p-10">
          <MyAssetContents>
            <MyAssetContetntsItem />
          </MyAssetContents>
          <MyAssetPagenation />
          <MyassetButtons />
          <MyAssetFooter />
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
