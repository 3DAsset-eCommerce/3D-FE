import AssetItem from '../assets/AssetItem'
import { Asset } from '@/api/interface/asset'
import MyAssetItem from './MyAssetItem'
import { MyAsset, MyAssetItemProps, MyAssets } from '@/api/interface/myAsset'

interface MyAssetListProps {
  myAssets: MyAsset[] | undefined
  // assetItems: MyAssetItemProps['item'][]
  // onChecked: (assetId: string, isChecked: boolean) => void
  // setAssetItems: React.Dispatch<React.SetStateAction<MyAssetItemProps['item'][]>>
  // selectedAssetItems: string[]
  // setSelectedAssetIds: React.Dispatch<React.SetStateAction<string[]>>
}

export default function MyAssetList({
  myAssets,
}: // assetItems,
// onChecked,
// selectedAssetItems,
// setSelectedAssetIds,
MyAssetListProps) {
  if (!myAssets) return null

  return (
    <ul className="mb-[6.4rem] flex flex-wrap gap-2">
      {myAssets.map((myAsset) => (
        // <MyAssetItem key={myAsset.assetId} myAsset={myAsset} />
        <MyAssetItem
          key={myAsset.assetId}
          myAsset={myAsset}
          // item={assetItems}
          // onChecked={onChecked}
          // isChecked={selectedAssetItems.includes(String(myAsset.assetId))}
          // assetItems={assetItems}
          // selectedAssetItems={selectedAssetItems}
          // setSelectedAssetIds={setSelectedAssetIds}
        />
      ))}
    </ul>
  )
}
