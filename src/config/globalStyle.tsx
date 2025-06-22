import { Global, css } from '@emotion/react';
import type { Theme } from 'types/app/Theme';

export const GlobalStyle = ({ theme }: { theme: Theme }) => (
  <Global
    styles={css`
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
        background: ${theme.palette.scrollBar.default};
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.palette.scrollBar.hover};
      }
    `}
  />
);
