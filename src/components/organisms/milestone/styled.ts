import styled from 'styled-components'

export const ExpandIconWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  right: 0px;

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
  display: flex;
  font-size: 22px;
  justify-content: center;
  margin: 0px 24px 0px 24px;
  overflow: ${(props: HeaderTitleParamTypes) => (props.isExpanded ? '' : 'hidden')};
  text-overflow: ${(props: HeaderTitleParamTypes) => (props.isExpanded ? '' : 'ellipsis')};
  white-space: ${(props: HeaderTitleParamTypes) => (props.isExpanded ? '' : 'nowrap')};
`

export const HeaderTitleWrapper = styled.div`
  display: flex;
  font-size: 22px;
  justify-content: center;
  margin: 16px;
  position: relative;
  user-select: none;
`

export const MilestonesWrapper = styled.div`
  padding: 0 8px 8px 8px;
`

interface WrapperParamTypes {
  isExpanded: boolean
}
export const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.milestone.background};
  height: min-content;
  overflow: auto;
  width: ${(props: WrapperParamTypes) => (props.isExpanded ? '320px' : '120px')};
`
