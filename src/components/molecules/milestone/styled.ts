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

interface HeaderTitleParamTypes {
  isExpanded: boolean
}
export const HeaderTitle = styled.div`
  color: white;
  font-size: ${(props: HeaderTitleParamTypes) => (props.isExpanded ? '1.5rem' : '1.25rem')};
  overflow: ${(props: HeaderTitleParamTypes) => (props.isExpanded ? '' : 'hidden')};
  text-align: center;
  text-overflow: ${(props: HeaderTitleParamTypes) => (props.isExpanded ? '' : 'ellipsis')};
  white-space: ${(props: HeaderTitleParamTypes) => (props.isExpanded ? '' : 'nowrap')};
`

interface HeaderTitleWrapperParamTypes {
  isExpanded: boolean
}
export const HeaderTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${(props: HeaderTitleWrapperParamTypes) =>
    props.isExpanded ? '16px' : '16px 8px 16px 8px'};
  position: relative;
  user-select: none;
`

export const MilestonesWrapper = styled.div`
  padding: 0 8px 8px 8px;
`

export const Status = styled.div`
  border: 1px solid ${props => props.theme.palette.category.border};
  border-radius: 8px;
  color: rgb(186, 193, 197);
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
  padding: 4px 8px 4px 8px;
  text-transform: uppercase;
  user-select: none;
  width: fit-content;
`

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 16px 16px 16px;
`

interface WrapperParamTypes {
  isExpanded: boolean
}
export const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.milestone.background};
  border-top: 3px solid rgb(173, 225, 255);
  height: min-content;
  overflow: auto;
  width: ${(props: WrapperParamTypes) => (props.isExpanded ? '320px' : '120px')};
`
