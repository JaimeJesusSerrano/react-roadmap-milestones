import Category from './Category'
import Tag from './Tag'

interface Goal {
  category?: Category
  description: string
  estimatedFinishDate?: Date
  finishDate?: Date
  images: string[]
  name: string
  shortDescription: string
  startDate?: Date
  status: string
  tags: Tag[]
  updateDate: Date
}

export default Goal
