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
  font-size: 1.5rem;
  justify-content: center;
  margin: 0px 24px 0px 24px;
  overflow: ${(props: HeaderTitleParamTypes) => (props.isExpanded ? '' : 'hidden')};
  text-overflow: ${(props: HeaderTitleParamTypes) => (props.isExpanded ? '' : 'ellipsis')};
  white-space: ${(props: HeaderTitleParamTypes) => (props.isExpanded ? '' : 'nowrap')};
`

export const HeaderTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px;
  position: relative;
  user-select: none;
`

export const MilestonesWrapper = styled.div`
  padding: 0 8px 8px 8px;
`

export const Status = styled.div`
  border: 1px solid ${props => props.theme.palette.categoty.border};
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
  height: min-content;
  overflow: auto;
  width: ${(props: WrapperParamTypes) => (props.isExpanded ? '320px' : '120px')};
`
