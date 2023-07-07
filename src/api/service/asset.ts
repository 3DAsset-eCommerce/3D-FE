/**
 * 에셋 관련 API
 */
import { readFile } from 'fs/promises'
import path from 'path'
import { axiosInstance } from '../axios'
import { AssetDetailResponse, AssetResponse } from '../interface/asset'

// export interface Asset {
//   id: number
//   title: string
//   price: number
//   discount: number
//   categories: Categories
//   createdAt: string
//   updatedAt: string
// }

// interface Categories {
//   title: string
//   tags: string[]
// }

// export async function getAllAssets(): Promise<Asset[]> {
//   const filePath = path.join(process.cwd(), 'src', 'data', 'assets.json')
//   return readFile(filePath, 'utf-8').then<Asset[]>(JSON.parse)
// }

export const getAssets = async <T = AssetResponse>(page: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets?page=${page}`)
  return res.data
}

export const getAssetDetail = async <T = AssetDetailResponse>(id: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets/${id}/details`)
  return res.data
}

export const getSubCategories = async <T = AssetResponse>(
  page: number,
  category: string,
  subCategory: string,
): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets/${category}/${subCategory}?page=${page}`)
  return res.data
}
