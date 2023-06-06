export interface Category {
  name: string
  subcategories: Subcategory[]
  totalCount: number
}

export interface Subcategory {
  name: string
  count: number
}
