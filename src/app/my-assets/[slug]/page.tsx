import AssetDetail from '@/components/assetDetail/AssetDetail'
import Drawer from '@/components/common/Drawer'
import Layout from '@/components/common/Layout'
import { MyassetButtons } from '@/components/myasset/MyAssetButtons'
import { MyAssetContents } from '@/components/myasset/MyAssetContents'
import { MyAssetContetntsItem } from '@/components/myasset/MyAssetContetntsItem'
import { MyAssetFooter } from '@/components/myasset/MyAssetFooter'
import { MyAssetPagenation } from '@/components/myasset/MyAssetPagenation'
export default function MyAssetsPage() {
  alert('page')
  return (
    <Layout>
      <div className="flex w-2 divide-x-0 p-3"></div>
      <div className="flex-col align-baseline"></div>
    </Layout>
  )
}
