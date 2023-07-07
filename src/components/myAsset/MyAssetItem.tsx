import { Asset } from '@/api/interface/asset'
import { formatPrice } from '@/utils/formatPrice'
import Image from 'next/image'
import CustomCheckbox from '../common/CustomCheckbox'
import { useDispatch } from 'react-redux'
import { setClickedMyAsset } from '@/store/clickedMyAssetSlice'
import { openDrawer } from '@/store/drawerSlice'
import { MyAsset, MyAssetItemProps } from '@/api/interface/myAsset'
import { useState } from 'react'

interface AssetItemProps {
  myAsset: MyAsset
  // item: MyAssetItemProps['item']
  // onChecked: (assetId: string, isChecked: boolean) => void
  // isChecked: boolean
  // assetItems: AssetItemProps['myAsset'][]
  // setAssetItems: React.Dispatch<React.SetStateAction<MyAssetItemProps['item'][]>>
  // selectedAssetItems: string[]
  // setSelectedAssetIds: React.Dispatch<React.SetStateAction<string[]>>
}

export default function AssetItem({
  myAsset,
}: // item,
// onChecked,
// isChecked,
// assetItems,
// setAssetItems,
// setSelectedAssetIds,
AssetItemProps) {
  const [availableImg, setAvailableImg] = useState(false)
  const [clickedDownload, setClickedDownload] = useState(false)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setClickedMyAsset(myAsset.assetId))
    dispatch(openDrawer())
  }

  const handleCheckboxChange = (isChecked: boolean) => {
    // onChecked(`${myAsset.assetId}`, isChecked)
  }

  const handelAssetDownload = () => {}

  return (
    <li className="mb-3">
      <button
        onClick={handleClick}
        className="h-[30.4rem] min-w-[22.4rem] hover:rounded-[0.4rem] hover:border-2 hover:border-primary-main
    focus:rounded-[0.4rem]"
      >
        <div className="p-[0.4rem]">
          <div className="rounded relative ml-[0.4rem] h-[26.6rem] w-[20.6rem] rounded-sm bg-neutral-navy-300">
            {availableImg ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_URL}${myAsset.thumbnailUrl}`}
                width={206}
                height={200}
                alt="Thumbnail"
              />
            ) : (
              <>
                <span className="items-center text-base leading-[2.4rem] text-neutral-navy-100">
                  no image available
                </span>
              </>
            )}
            {/* {myAsset.thumbnailUrl} */}
            <div className="absolute flex px-4 pt-[20rem]">
              {/* <CustomCheckbox
                // id="assetId"
                // id={`i${item.assetId}`}
                id={`i${myAsset.assetId}`}
                onChange={handleCheckboxChange}
                isChecked={isChecked}
              /> */}
              <div
                onClick={handelAssetDownload}
                className="h-[3.2rem] w-[3.2rem] rounded-sm bg-neutral-navy-850 p-2 hover:bg-transparent-darkblue"
              >
                <Image
                  // src={clickedDownload ? '/icons/downloadWhite.svg' : '/icons/download.svg'}
                  src={'/icons/download.svg'}
                  width={24}
                  height={24}
                  alt="다운로드"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="ml-2 mt-1 flex h-[2.8rem] items-center text-base leading-[2.4rem] text-neutral-navy-100">
              {myAsset.assetName}
            </h3>
          </div>
        </div>
      </button>
    </li>
  )
}
