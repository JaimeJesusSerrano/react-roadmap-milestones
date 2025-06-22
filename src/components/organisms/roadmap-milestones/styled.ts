import styled from '@emotion/styled';
import type { Theme as AppTheme } from 'types/app/Theme'

export const MilestoneWrapper = styled.div`
  display: flex;
  margin-right: 8px;
  min-width: min-content;
  overflow-y: auto;
`;

export const Wrapper = styled.div<{ theme?: AppTheme }>`
  background-color: ${props => props.theme.palette.background.default};
  box-sizing: border-box;
  display: flex;
  height: 100%;
  overflow-y: hidden;
  padding: 16px;
  width: 100%;
`;
