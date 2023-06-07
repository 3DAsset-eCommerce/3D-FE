import Image from 'next/image'
export const MyAssetSearch = () => {
  return (
    <div className="flex h-full  w-[25rem] rounded-md bg-bg-3 px-[1rem]">
      <Image src="/icons/search.svg" alt="검색" width={18} height={18} />
      <input type="text" className="ml-[0.8rem] w-full bg-bg-3 text-transparent-navy" />
    </div>
  )
}
