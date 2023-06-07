import { getAllAssets } from '@/api/assets'
import AssetDetail from '@/components/assetDetail/AssetDetail'
import AssetsList from '@/components/assets/AssetsList'
import Drawer from '@/components/common/Drawer'
import Layout from '@/components/common/Layout'

export default async function HomePage() {
  const assets = await getAllAssets()

  return (
    <Layout>
      <div className="flex h-full ">
        <section className="w-full px-[2.3rem] pt-8">
          <AssetsList assets={assets} />
        </section>
        <section className="sticky top-[7.2rem] h-[calc(100vh-7.2rem)] ">
          <Drawer>
            <AssetDetail />
          </Drawer>
        </section>
      </div>
    </Layout>
  )
}
