import { FieldValues } from 'react-hook-form'
import { ApiResponse } from '.'

export interface MyAssetItemProps {
  item: MyAsset
}

export interface MyAsset {
  assetId: number
  assetName: String
  fileUrl: String | null
  thumbnailUrl: String | null
}

export interface MyAssets extends FieldValues {
  myAssetList: MyAsset[]
  size: number
  currentPage: number
  totalPage: number
  totalElement: number
}

export type MyAssetResponse = ApiResponse<MyAssets>

export interface AssetDownload {
  userId: number
  assets: []
}

export interface AssetDownloadResponse {
  myAssetList: [{ assetId: number; fileUrl: string }]
}
