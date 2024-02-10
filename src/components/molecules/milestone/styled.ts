import styled from 'styled-components'

export const ExpandIconWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  height: 100%;

  svg {
    color: ${props => props.theme.palette.blue.light};
  }
`

export const Header = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-height: 96px;
`

export const HeaderTitle = styled.div<{ $isExpanded: boolean }>`
  color: white;
  font-size: ${(props) => (props.$isExpanded ? '1.5rem' : '1.25rem')};
  font-weight: 600;
  overflow: ${(props) => (props.$isExpanded ? '' : 'hidden')};
  text-align: center;
  text-overflow: ${(props) => (props.$isExpanded ? '' : 'ellipsis')};
  white-space: ${(props) => (props.$isExpanded ? '' : 'nowrap')};
`

export const HeaderTitleWrapper = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${(props) => props.$isExpanded ? '16px' : '16px 8px 16px 8px'};
  position: relative;
  user-select: none;
`

export const MilestonesWrapper = styled.div`
  padding: 0 8px 8px 8px;
`

export const Status = styled.div`
  border: 1px solid ${props => props.theme.palette.category.border};
  border-radius: 8px;
  color: rgb(173, 225, 255);
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 1px;
  padding: 4px 8px 4px 8px;
  text-transform: uppercase;
  user-select: none;
  width: fit-content;
`

export const StatusDate = styled.div`
  color: rgb(173, 225, 255);
  font-size: 0.7rem;
  margin-top: 8px;
`

export const StatusWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 16px 24px 16px;
`

export const Wrapper = styled.div<{ $isExpanded: boolean }>`
  background-color: ${props => props.theme.palette.milestone.background};
  border-radius: 0px 0px 8px 8px;
  border-top: 3px solid rgb(173, 225, 255);
  height: min-content;
  overflow: auto;
  width: ${(props) => (props.$isExpanded ? '320px' : '120px')};
`
