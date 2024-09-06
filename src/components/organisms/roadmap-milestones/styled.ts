import { styled } from 'styled-components'

export const MilestoneWrapper = styled.div`
  display: flex;
  margin-right: 8px;
  min-width: min-content;
  overflow-y: auto;
`

export const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.background.default};
  display: flex;
  height: 100%;
  overflow-y: hidden;
  padding: 16px;
  width: 100%;
`
