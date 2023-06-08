import { closeDrawer } from '@/store/drawerSlice'
import { useDispatch } from 'react-redux'

interface Props {
  setSelectedTab: (prev: boolean) => void
  selectedTab: boolean
}

export default function AssetDetailNav({ setSelectedTab, selectedTab }: Props) {
  console.log({ selectedTab })
  const dispatch = useDispatch()

  const handleCloseDrawer = () => {
    dispatch(closeDrawer())
  }

  return (
    <div className="top- absolute flex h-[5rem] w-[70.9rem] bg-bg-0 text-neutral-200">
      <div
        onClick={() => setSelectedTab(true)}
        className={`${
          selectedTab ? 'border-primary-main bg-bg-2' : 'border-transparent-navy-30 '
        } flex w-[31.5rem] items-center justify-center  border-b-[0.3rem] hover:border-primary-main hover:bg-bg-2`}
      >
        <button>Asset Detail</button>
      </div>
      <div
        onClick={() => setSelectedTab(false)}
        className={`${
          !selectedTab ? 'border-primary-main bg-bg-2 ' : 'border-transparent-navy-30 '
        } flex w-[31.5rem] items-center justify-center  border-b-[0.3rem] hover:border-primary-main hover:bg-bg-2`}
      >
        <button>
          Review <span>(0)</span>
        </button>
      </div>
      <div
        className="flex w-[8rem] items-center justify-center  border-b-[0.3rem] border-transparent-navy-30 hover:border-primary-main hover:bg-bg-2"
        onClick={handleCloseDrawer}
      >
        <button>닫기</button>
      </div>
    </div>
  )
}
