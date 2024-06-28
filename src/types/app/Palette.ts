export type ColorValueHex = `#${string}`

export interface Palette {
  background: {
    default: ColorValueHex
  }
  category: {
    background: {
      default: ColorValueHex
    }
    border: {
      default: ColorValueHex
    }
    expandIcon: {
      default: ColorValueHex
    }
  }
  milestone: {
    background: {
      default: ColorValueHex
    }
    expandIcon: {
      default: ColorValueHex
    }
    finishDate: {
      font: {
        default: ColorValueHex
      }
    }
    status: {
      border: {
        default: ColorValueHex
      }
      font: {
        default: ColorValueHex
      }
    }
  }
  oldMilestones: {
    background: {
      default: ColorValueHex
    }
    border: {
      default: ColorValueHex
    }
  }
  scrollBar: {
    default: ColorValueHex
    hover: ColorValueHex
  }
}
