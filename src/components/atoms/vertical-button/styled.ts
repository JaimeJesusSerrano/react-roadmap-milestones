import styled from 'styled-components'

export const Body = styled.div`
  align-items: center;
  background-color: ${props => props.theme.palette.oldMilestones.background.default};
  border: 1px solid ${props => props.theme.palette.oldMilestones.border.default};
  border-radius: 8px;
  color: white;
  display: flex;
  padding: 12px 12px 14px 10px;
  text-transform: uppercase;
  transform: rotate(180deg);
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  user-select: none;
  writing-mode: tb-rl;
`
