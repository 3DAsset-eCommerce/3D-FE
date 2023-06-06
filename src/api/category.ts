import { readFile } from 'fs/promises'
import path from 'path'
import { Category } from '@/interface/category'

export async function getAllCategories(): Promise<Category[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'category.json')
  return readFile(filePath, 'utf-8').then<Category[]>(JSON.parse)
}
