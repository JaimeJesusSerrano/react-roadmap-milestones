import { createGlobalStyle } from 'styled-components'

import type { Theme } from 'types/app/Theme'

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  /* width */
  ::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.palette.scrollBar.default};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.palette.scrollBar.hover};
  }
`
