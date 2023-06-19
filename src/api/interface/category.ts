/**
 * 카테고리 Interface
 */
export interface Category {
  name: string
  subcategories: Subcategory[]
  totalCount: number
  tags?: []
}

export interface Subcategory {
  name: string
  count: number
  tags?: []
}
