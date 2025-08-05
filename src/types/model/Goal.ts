import type { Category } from './Category'
import type { Tag } from './Tag'

export interface Goal {
  category?: Category
  description: string
  finishDate?: Date
  images: string[]
  name: string
  shortDescription?: string
  startDate?: Date
  status: string
  tags: Tag[]
  updateDate: Date
}
