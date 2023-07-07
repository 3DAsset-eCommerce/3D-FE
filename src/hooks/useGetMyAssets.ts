import { getMyAssets } from '@/api/service/myAsset'
import { RootState } from '@/store/store'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'

export const useGetMyAssets = (page: number, size: number) => {
  const userId = useSelector((state: RootState) => state.user.userId)

  const { data: myAssets, isLoading } = useQuery({
    queryKey: ['assets', page],
    queryFn: () => getMyAssets(userId, page, size),
    // queryFn: () => getMyAssets(userId || 0, page, size),
    keepPreviousData: true,
  })

  return { myAssets, isLoading }
}

// import { getMyAssets } from '@/api/service/myAsset'
// import { RootState } from '@/store/store'
// import { useQuery } from '@tanstack/react-query'
// import { useSelector } from 'react-redux'

// export const useGetMyAssets = (page: number, size: number) => {
//   const userId = useSelector((state: RootState) => state.user.userId)

//   const { data: myAssets, isLoading } = useQuery({
//     queryKey: ['assets', page],
//     queryFn: () => getMyAssets(userId, page, size),
//     keepPreviousData: true,
//   })

//   return { myAssets, isLoading }
// }
// import { getMyAssets } from '@/api/service/myAsset'
// import { RootState } from '@/store/store'
// import { useQuery } from '@tanstack/react-query'
// import { useSelector } from 'react-redux'

// export const useGetMyAssets = (id: number | null, page: number, size: number) => {
//   const { data: myAssets, isLoading } = useQuery({
//     queryKey: ['myAssets', id, page],
//     queryFn: () => getMyAssets(id, page, size),
//     keepPreviousData: true,
//   })

//   return { myAssets, isLoading }
// }

// export const useGetMyAssets = (page: number, size: number) => {
//   const userId = useSelector((state: RootState) => state.user.userId)
//   const { data: myAssets, isLoading } = useQuery({
//     queryKey: ['myAssets', page],
//     queryFn: () => getMyAssets(userId, page, size),
//     keepPreviousData: true,
//   })
//   return { myAssets, isLoading }
// }
