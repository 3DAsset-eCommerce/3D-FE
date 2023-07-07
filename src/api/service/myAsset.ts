/**
 * 내 에셋 관련 API
 */
import { axiosInstance } from '../axios'
import { MyAssetResponse } from '../interface/myAsset'
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export const getMyAssets = async <T = MyAssetResponse>(
  id: number | null,
  page: number,
  size: number,
): Promise<T> => {
  const res = await axiosInstance.get<T>(`/s/user/${id}/assets?page=${page}&size=${size}`)
  // const res = await axiosInstance.get<T>(`/s/user/${id}/assets?page=${page}`)
  // const res = await axiosInstance.get<T>(`/s/user/${id}/assets?`)
  return res.data
}

// export const getMyAssets = async <T = MyAssetResponse>(
//   id: number,
//   page: number,
//   size: number | null,
// ): Promise<T> => {
//   const res = await axiosInstance.get<T>(`/s/user/${id}/assets?page=${page}&size=${size}`)
//   return res.data
// }

// export const downloadMyAsset = async () => {
//   try {
//     const res = await axios.post(`/api/download`, {
//       responseType: 'blob',
//     })
//     return res.data
//   } catch (error) {
//     console.error('에셋을 다운로드하는 중 오류 발생:', error)
//   }
// }
// export const downloadMyAsset = async (assetUrl: string, assetName: string) => {
//   try {
//     const response = await axios.get(`/api/download?fileUrl=${encodeURIComponent(assetUrl)}`, {
//       responseType: 'blob',
//     })
//     const url = window.URL.createObjectURL(new Blob([response.data]))
//     const link = document.createElement('a')
//     link.href = url
//     link.setAttribute('download', assetName)
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   } catch (error) {
//     console.error('에셋을 다운로드하는 중 오류 발생:', error)
//   }
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { fileUrl } = req.query

//   try {
//     const response = await axios.get(fileUrl, { responseType: 'arraybuffer' })
//     res.status(200).send(response.data)
//   } catch (error) {
//     console.error('파일 다운로드 중 오류 발생:', error)
//     res.status(500).send('파일 다운로드 중 오류가 발생했습니다.')
//   }
// }
