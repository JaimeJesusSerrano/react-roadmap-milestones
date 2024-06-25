export interface Palette {
  blue: BluePalette
  category: CategoryPalette
  milestone: MilestonePalette
  scrollBar: ScrollBarPalette
}

interface BluePalette {
  light: string
  main: string
  dark: string
}

interface CategoryPalette {
  background: string
  border: string
  chevron: string
}

interface MilestonePalette {
  background: string
}

interface ScrollBarPalette {
  default: string
  hover: string
}
